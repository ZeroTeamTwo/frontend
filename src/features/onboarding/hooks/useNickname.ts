'use client';

import { useEffect, useState, useCallback } from 'react';
type ErrorType = 'length' | 'duplicate' | null;
interface NicknameError {
	type: ErrorType;
	msg: string | null;
}
interface UseNicknameReturn {
	nickname: string;
	setNickname: React.Dispatch<React.SetStateAction<string>>;
	error: NicknameError;
	isChecking: boolean;
	isValidLength: boolean;
	isDuplicateChecked: boolean;
	checkDuplicate: () => Promise<void>;
	resetDuplicateCheck: () => void;
	isValid: boolean;
}
export function useNickname(): UseNicknameReturn {
	const [nickname, setNickname] = useState<string>('');
	const [error, setError] = useState<NicknameError>({ type: null, msg: null });
	const [isChecking, setIsChecking] = useState<boolean>(false);
	const [isDuplicateChecked, setIsDuplicateChecked] = useState<boolean>(false);
	// 닉네임 길이가 유효한지 확인
	const isValidLength = nickname.length >= 3 && nickname.length <= 8;
	// 닉네임 중복 확인 함수 (실제로는 API 호출)
	const checkDuplicate = useCallback(async () => {
		if (!isValidLength) return;
		setIsChecking(true);
		try {
			const token = localStorage.getItem('accesstoken'); // 혹은 context나 cookie에서 가져오기

			if (!token) {
				throw new Error('로그인 토큰이 없습니다.');
			}

			const response = await fetch('http://13.209.248.6:8080/api/users/nickname/check', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					Authorization: `Bearer ${token}`,
					Accept: 'application/json;charset=UTF-8',
				},
				body: JSON.stringify({ nickname }),
			});

			if (!response.ok) {
				throw new Error('서버 응답 오류');
			}

			const data = await response.json();

			// 서버 응답에 따라 중복 여부 확인
			const isDuplicate = data?.duplicate ?? true; // API 응답 구조에 따라 수정
			if (isDuplicate) {
				setError({ type: 'duplicate', msg: '이미 사용 중인 닉네임입니다.' });
			} else {
				setError({ type: null, msg: null });
			}
			setIsDuplicateChecked(true);
		} catch (error) {
			console.error('중복 확인 중 오류 발생:', error);
			setError({ type: 'duplicate', msg: '중복 확인 중 오류가 발생했습니다.' });
		} finally {
			setIsChecking(false);
		}
	}, [isValidLength, nickname]);
	// 닉네임 변경 시 중복 확인 초기화
	const resetDuplicateCheck = useCallback(() => {
		setIsDuplicateChecked(false);
	}, []);
	// 닉네임 변경 시 길이 유효성 검사
	useEffect(() => {
		if (nickname === '') {
			setError({ type: null, msg: null });
			return;
		}
		if (!isValidLength) {
			setError({ type: 'length', msg: '3~8글자 사이로 입력해주세요' });
		} else if (!isDuplicateChecked) {
			// 길이는 유효하지만 중복 확인이 필요함을 표시
			setError({ type: null, msg: '중복 확인이 필요합니다' });
		}
		// 닉네임이 변경되면 중복 확인 상태 초기화
		resetDuplicateCheck();
	}, [nickname, isValidLength, isDuplicateChecked, resetDuplicateCheck]);
	// 닉네임이 모든 조건을 만족하는지 여부
	const isValid = isValidLength && isDuplicateChecked && error.type === null;
	return {
		nickname,
		setNickname,
		error,
		isChecking,
		isValidLength,
		isDuplicateChecked,
		checkDuplicate,
		resetDuplicateCheck,
		isValid,
	};
}
