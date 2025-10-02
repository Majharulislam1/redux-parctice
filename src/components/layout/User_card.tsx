// import { delete_user } from "@/redux/features/user/user_slice";
// import { useAppDispatch } from "@/redux/hooks";
import type { user_type } from "@/types/types";




const User_card = ({ users }: { users: user_type }) => {
   
    // const dispetch = useAppDispatch();
     
    
    return (
        <div>
            <div className="border rounded-sm p-4 flex justify-between max-w-60">
                <div className="mr-16">
                    <h2>{users.name}</h2>
                </div>
                 <div > {/* //onClick={()=>dispetch(delete_user(users.id))} */}
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24" > <path d="m17,6v-2c0-1.1-.9-2-2-2h-6c-1.1,0-2,.9-2,2v2H2v2h2v12c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2v-12h2v-2h-5Zm-8-2h6v2h-6v-2Zm9,16H6v-12h12v12Z"></path><path d="M14.29 10.29 12 12.59 9.71 10.29 8.29 11.71 10.59 14 8.29 16.29 9.71 17.71 12 15.41 14.29 17.71 15.71 16.29 13.41 14 15.71 11.71 14.29 10.29z"></path></svg>
                </div>
            </div>
        </div>
    );
};

export default User_card;