
export default function SignUp() {
  return (
    <div className="p-3 mx-auto max-w-lg">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4">
      <input type="text" className="border p-3 rounded-lg" placeholder="Username"/>
      <input type="email" className="border p-3 rounded-lg" placeholder="Email"/>
      <input type="password" className="border p-3 rounded-lg" placeholder="Password"/>
      <button className="bg-sky-900 text-white">Sign Up</button>
      </form>
    </div>
  )
}
