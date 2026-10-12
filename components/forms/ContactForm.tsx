"use client";
import { useState, type FormEvent } from "react";
import { services } from "@/data/site";
import { buttonBase } from "@/components/ui/Button";

type Fields = "name" | "email" | "phone" | "type" | "message";
type Errors = Partial<Record<Fields, string>>;
type Status = "idle" | "loading" | "success";

function validate(d: FormData): Errors {
  const v = (k: Fields) => String(d.get(k) ?? "").trim();
  const e: Errors = {};
  if (v("name").length < 2) e.name = "Ingrese su nombre.";
  if (!/^\S+@\S+\.\S+$/.test(v("email"))) e.email = "Ingrese un email válido.";
  if (v("phone") && v("phone").replace(/\D/g, "").length < 8) e.phone = "Ingrese un teléfono válido.";
  if (!v("type")) e.type = "Seleccione un tipo de consulta.";
  if (v("message").length < 10) e.message = "Describa brevemente su caso (mínimo 10 caracteres).";
  return e;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const found = validate(new FormData(form));
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("loading");
    setTimeout(() => { setStatus("success"); form.reset(); }, 900); // Simulado: no hay backend.
  }

  const field = "mt-1 w-full min-h-11 rounded-lg border bg-white px-3 py-2 transition focus:border-gold";
  const Err = ({ id, k }: { id: string; k: Fields }) => errors[k] ? <p id={id} className="mt-1 text-sm text-red-700">⚠ {errors[k]}</p> : null;
  const props = (k: Fields) => ({ id: k, name: k, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-e` : undefined, className: `${field} ${errors[k] ? "border-red-700" : "border-petrol-900/20"}` });

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-gold bg-white p-8">
        <h3 className="font-serif text-2xl">Mensaje recibido (simulación)</h3>
        <p className="mt-2 text-muted">Este es un sitio de demostración: no se envió ni almacenó información.</p>
        <button onClick={() => setStatus("idle")} className={`${buttonBase} mt-5 bg-petrol-900 text-white`}>Enviar otro mensaje</button>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-petrol-900/10 bg-white p-6 sm:p-8">
      <div><label htmlFor="name">Nombre</label><input {...props("name")} autoComplete="name" /><Err id="name-e" k="name" /></div>
      <div><label htmlFor="email">Email</label><input {...props("email")} type="email" autoComplete="email" /><Err id="email-e" k="email" /></div>
      <div><label htmlFor="phone">Teléfono (opcional)</label><input {...props("phone")} type="tel" autoComplete="tel" /><Err id="phone-e" k="phone" /></div>
      <div><label htmlFor="type">Tipo de consulta</label>
        <select {...props("type")} defaultValue=""><option value="" disabled>Seleccione una opción</option>
          {services.map((s) => <option key={s.title}>{s.title}</option>)}<option>Otro</option></select><Err id="type-e" k="type" /></div>
      <div><label htmlFor="message">Mensaje</label><textarea {...props("message")} rows={4} /><Err id="message-e" k="message" /></div>
      <button type="submit" disabled={status === "loading"} className={`${buttonBase} w-full bg-petrol-900 text-white hover:bg-petrol-800`}>{status === "loading" ? "Enviando…" : "Enviar mensaje"}</button>
    </form>
  );
}
