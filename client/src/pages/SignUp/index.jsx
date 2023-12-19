
export default function SignUp() {
  return (
    <div>
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up</h1>
      <form>
      <input type="text" className="border p-3 rounded-lg" placeholder="Username"/>
      <input type="email" className="border p-3 rounded-lg" placeholder="Email"/>
      <input type="password" className="border p-3 rounded-lg" placeholder="Password"/>
      </form>
    </div>
  )
}
