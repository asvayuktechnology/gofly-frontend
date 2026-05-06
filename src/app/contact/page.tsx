import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import ContactPage from "@/Components/ContactPage/ContactPage";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";



export default function Contact() {
    return (
        <>
            <Breadcrumb
                title="Contact"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Contact" },
                ]}
                backgroundImage="/assets/img/breadcrumb-bg2.jpg"
            />

             <ContactPage/>
        </>
    );
}