import FormLogin from "@/components/form-login";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

import { Card } from "primereact/card";

const LoginPage = () => {
	console.log('Login Page KERENDER')
	  // const session = isLogin
		const isLoginValue = Cookies.get('is_login');
		console.log('isLoginValue', isLoginValue)
		if(isLoginValue){
			redirect('/')
		}
	return (
		<div className="grid grid-rows items-center justify-center w-full">
			<Card title="Control Tower" className="bg-white p-8 ">
				<FormLogin />
			</Card>
		</div>
	);
};

export default LoginPage;
