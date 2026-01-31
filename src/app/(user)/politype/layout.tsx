import Image from 'next/image';

export default function PolytypeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="flex w-full min-h-[calc(100dvh-64px)] justify-center bg-bg-normal-alternative">
			<div className="relative w-full max-w-[600px] min-h-[calc(100dvh-64px)] overflow-hidden bg-[#154E20]">
				<Image src="/images/politype/background.png" alt="" fill sizes="600px" priority className="object-cover" draggable={false} />
				<div className="relative z-[1] w-full min-h-[calc(100dvh-64px)]">{children}</div>
			</div>
		</div>
	);
}
