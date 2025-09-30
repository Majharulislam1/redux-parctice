import { select_user } from "@/redux/features/user/user_slice";
import { useAppSelector } from "@/redux/hooks";

 

const User = () => {

     const user = useAppSelector(select_user);

     console.log(user);


    return (
        <div>
            <h1>this is user page</h1>
            
        </div>
    );
};

export default User;