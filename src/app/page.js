import { isLogin } from "@/utlis/session"
import { redirect } from "next/navigation"

        
export default function Home() {
  // console.log('home page');
  // const session = isLogin
  // if(!session){
  //   redirect('/login')
  // }
  return (
    <main className='flex min-h-screen flex-row items-center justify-between p-24' >
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
    </main>
  )
}