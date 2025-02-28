import { useRouter } from "expo-router"



export const useCustomNavigation = () => {
    const router = useRouter()

    return {
        router
    }

}