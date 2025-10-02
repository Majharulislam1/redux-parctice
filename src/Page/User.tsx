import { Add_user } from "@/components/layout/Add_user";
import User_card from "@/components/layout/User_card";
import { select_user } from "@/redux/features/user/user_slice";
import { useAppSelector } from "@/redux/hooks";



const User = () => {

    const user = useAppSelector(select_user);

     


    return (
        <div >
            
            <div className="mb-4">
                 <Add_user></Add_user>
            </div>
            <div className="gap-4 flex items-center">


                {
                    user.map((user) => <User_card users={user} key={user.id}></User_card>)
                }
            </div>



        </div>
    );
};

export default User;