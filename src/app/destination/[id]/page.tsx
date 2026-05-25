import DestinationDetails from "@/Components/Desti_Details/DestinationDetails";
interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function DestinationDetailsPage({
    params,
}: Props) {
    const { id } = await params;

    return <DestinationDetails id={id} />;
}