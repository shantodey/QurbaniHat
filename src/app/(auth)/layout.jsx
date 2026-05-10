import Navber from '@/component/shared/Navber';


const AuthLayout = ({children}) => {
    return (
        <>
            <Navber/>
            {children}
        </>
    );
};

export default AuthLayout;