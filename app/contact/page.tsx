export default function ContactPage() {
  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl text-primary text-center">
        Contact Us
      </h1>

      <p className="font-body text-neutralDark text-lg text-center">
        We’d love to hear from you! Whether you have a question, feedback, or
        partnership inquiry, feel free to reach out.
      </p>

      <div className="bg-white border border-neutralLight rounded-xl p-8 shadow-md space-y-6">
        <p className="font-body text-neutralDark">
          <strong>Email:</strong> support@soloartisan.com
        </p>

        <p className="font-body text-neutralDark">
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>

        <p className="font-body text-neutralDark">
          <strong>Address:</strong>  
          123 Artisan Street  
          Creative District, Craftsville
        </p>

        <p className="font-body text-neutralDark">
          You can also follow us on social media to stay updated on new artisan
          releases and handcrafted collections.
        </p>
      </div>
    </div>
  )
}
