import Peoplebar from "@/components/Peoplebar";
import Content from "@/components/Content";

function Page() {
    return (
        <div className="container flex flex-row">
            <Content />
            <Peoplebar />
        </div>
    )
}

export default Page;