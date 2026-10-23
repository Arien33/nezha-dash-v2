import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ChartSkeleton from "@/components/loading/ChartSkeleton";
import Bar from "@/components/loading/SkeletonBar";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useRuntimeConfig } from "@/lib/runtime-config";
import { cn } from "@/lib/utils";

import { BackIcon } from "../Icon";

export function ServerDetailChartLoading() {
	const { t } = useTranslation();
	const { backgroundImage } = useRuntimeConfig();
	return (
		<div
			role="status"
			aria-label={t("serviceTracker.loading")}
			aria-busy="true"
		>
			<div aria-hidden="true">
				<Bar className="mb-3 -mt-3 h-8 w-64 max-w-full rounded-full sm:-mt-5" />
				<section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 6 }, (_, index) => (
						<Card
							key={index}
							className={cn("h-[182px]", { "bg-card/70": backgroundImage })}
						>
							<CardContent className="px-6 py-3">
								<div className="mb-1 flex h-6 items-center justify-between gap-4">
									<Bar className="h-3 w-16" />
									<Bar className="h-3 w-20" />
								</div>
								<ChartSkeleton height={130} />
							</CardContent>
						</Card>
					))}
				</section>
			</div>
		</div>
	);
}

export function ServerDetailLoading() {
	const navigate = useNavigate();

	return (
		<div className="mx-auto w-full max-w-5xl px-0">
			<div
				onClick={() => {
					navigate("/");
				}}
				className="flex flex-none cursor-pointer font-semibold leading-none items-center break-all tracking-tight gap-0.5 text-xl"
			>
				<BackIcon />
				<Skeleton className="h-[20px] w-24 rounded-[5px] bg-muted-foreground/10 animate-none"></Skeleton>
			</div>
			<Skeleton className="flex flex-wrap gap-2 h-[81px] w-1/2 mt-3 rounded-[5px] bg-muted-foreground/10 animate-none"></Skeleton>
		</div>
	);
}
