import { useQuery } from "@tanstack/react-query";
import { fetchLoginUser } from "@/lib/nezha-api";

// 所有页面共用登录缓存；短时间切换标签复用结果，回到前台重新确认会话。
export function useLoginUser() {
	return useQuery({
		queryKey: ["login-user"],
		queryFn: fetchLoginUser,
		staleTime: 30_000,
		refetchOnMount: true,
		refetchOnWindowFocus: "always",
		refetchOnReconnect: "always",
		refetchInterval: 30_000,
		refetchIntervalInBackground: false,
		retry: false,
	});
}
