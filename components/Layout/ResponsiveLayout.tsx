import {LayoutProps} from "./interface";
import Navbar from "../Navbar";
import {Main} from "./Main";
import {Container} from "./Container";
import Sidebar from "../Sidebar";

export const ResponsiveLayout:React.FC<LayoutProps> = ({children}) => (
	<>
		<Navbar />
		<Main customStyle={`${styles.root.style} ${styles.root.responsive}`}>
	        <Sidebar />
	        <Container customStyle={`${styles.container.responsive}`}>
	         	{children}
	        </Container>
      	</Main>
    </>
);

const styles = {
  root: {
    style: `grid-cols-6 relative `,
    responsive: `md:grid `,
  },
  container: {
    responsive: `md:col-span-5 `,
  }
};