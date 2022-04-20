import { axiosPrivate } from "./axios";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/actions";

export const useRefreshToken = () => {
    const dispatch = useDispatch();

    const refresh = async () => {
        const response = await axiosPrivate.get("/token");
        dispatch(setToken(response.data));
        return response.data;
    }
    return refresh;
}