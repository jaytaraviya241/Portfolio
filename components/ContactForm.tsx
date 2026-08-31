"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

const projectTypes = [
  "Full Shopify storefront build",
  "Figma-to-Shopify implementation",
  "Focused theme improvements",
  "Performance or accessibility refinement",
  "Ongoing development support",
  "Something else",
];

const timelines = ["Flexible", "Within 4–8 weeks", "Within 8–12 weeks", "Ongoing / phased"];

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry - ${data.get("name")}`);
    const body = encodeURIComponent(
      `Hi Jay,\n\nProject type: ${data.get("type")}\nTimeline: ${data.get("timeline")}\nStore / brand: ${data.get("url") || "Not supplied"}\n\n${data.get("message")}\n\n-${data.get("name")}\n${data.get("email")}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <div className="form-grid">
        <label className="field">
          <span>Name</span>
          <input required name="name" placeholder="Your name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input required type="email" name="email" placeholder="you@brand.com" />
        </label>
      </div>
      <label className="field">
        <span>Project type</span>
        <select name="type" defaultValue={projectTypes[0]}>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Store or brand URL <small>Optional</small></span>
        <input type="url" name="url" placeholder="https://yourstore.com" />
      </label>
      <label className="field">
        <span>Preferred timeline</span>
        <select name="timeline" defaultValue={timelines[0]}>
          {timelines.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
        </select>
      </label>
      <label className="field">
        <span>Brief</span>
        <textarea required name="message" rows={7} placeholder="What is changing, what is not working, and what should be different when the project is complete?" />
      </label>
      <div className="form-actions">
        <button className="button button--primary" type="submit">
          <span>Send brief</span>
          <ArrowUpRight aria-hidden="true" size={18} />
        </button>
        <button className="button button--outline" type="button" onClick={copyEmail}>
          {copied ? <Check aria-hidden="true" size={18} /> : <Copy aria-hidden="true" size={18} />}
          <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
        </button>
      </div>
    </form>
  );
}
