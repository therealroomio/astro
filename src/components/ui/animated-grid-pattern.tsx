import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedGridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
	numSquares?: number;
	maxOpacity?: number;
	duration?: number;
	repeatDelay?: number;
}

export const AnimatedGridPattern = ({
	className,
	numSquares = 300,
	maxOpacity = 0.05,
	duration = 3,
	repeatDelay = 1,
	...props
}: AnimatedGridPatternProps) => {
	return (
		<div
			className={cn(
				"absolute inset-0 mx-auto max-w-7xl",
				"[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
				className
			)}
			{...props}
		>
			<div className="grid h-full grid-cols-[repeat(auto-fill,minmax(40px,1fr))] opacity-50">
				{Array.from({ length: numSquares }).map((_, i) => (
					<div
						key={i}
						className="aspect-square bg-foreground/20"
						style={{
							opacity: Math.random() * maxOpacity,
							animation: `pulse ${duration + Math.random() * 2}s cubic-bezier(0.4, 0, 0.6, 1) ${
								Math.random() * repeatDelay
							}s infinite`,
						}}
					/>
				))}
			</div>
		</div>
	);
};
