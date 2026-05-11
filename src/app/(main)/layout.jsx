import Footer from '@/component/Footer';

const MainLayout = ({children}) => {
    return (
        <>
            {children}
            <Footer></Footer>
        </>
    );
};

export default MainLayout;