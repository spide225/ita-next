'use client'

function Location() {
  return (
    <section className="mt-16">
      <iframe
        className="w-full rounded-xl shadow-md"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.545215315871!2d-4.008256685256449!3d5.345317137189437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10209309d4b4ef1d%3A0x7a8ec37b693c0f0!2sCocody%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1694444444444!5m2!1sfr!2sci"
      ></iframe>
    </section>
  );
}

export default Location;
