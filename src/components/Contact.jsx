import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">Get In Touch</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.currentCity}</p>
            <p className="my-4"> Phone Number: {CONTACT.phoneNo}</p>
            <p className="my-4 mx-4">Email : 
            <a href={`mailto:${CONTACT.email}`} className="border-b mx-2">{CONTACT.email}</a>
            </p>

        <p className="my-4 mx-4">
        GitHub: <a href="https://github.com/Aymane-Arfaoui" target="_blank" rel="noopener noreferrer" className="border-b">Aymane-Arfaoui</a>
        </p>  
        </div>
      
    </div>
  )
}

export default Contact
