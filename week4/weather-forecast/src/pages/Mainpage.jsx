import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const Mainpage = () => {
	return (
		<PageLayout>
			<Outlet />
		</PageLayout>
	);
};

export default Mainpage;
