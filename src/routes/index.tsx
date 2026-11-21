import { createFileRoute } from "@tanstack/react-router";
import { Copy, Mail, Phone, MessageCircle, Leaf, Sun, Egg, ShieldCheck, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/jmk_logo.png.asset.json";
import hero from "@/assets/hero-farm.jpg";

const EMAIL = "jmkeggharvest@gmail.com";
const PHONE_DISPLAY = "+260 76 7054709";
const PHONE = "+260767054709";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JMK Egg Harvest — Freshness Our Quality" },
      { name: "description", content: "Farm-fresh eggs from healthy, well-cared-for layer hens in Zambia. Order from JMK Egg Harvest today." },
      { property: "og:title", content: "JMK Egg Harvest — Freshness Our Quality" },
      { property: "og:description", content: "Farm-fresh eggs from healthy layer hens in Zambia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function CopyBtn({ value, label }: { value: string; label: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      aria-label={`Copy ${label}`}
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setDone(true);
        toast.success(`${label} copied`);
        setTimeout(() => setDone(false), 1800);
      }}
      className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm text-forest-foreground transition hover:bg-gold hover:text-forest"
    >
      {done ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {done ? "Copied" : "Copy"}
    </button>
  );
}

function Index() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen text-forest-foreground">
        <img src={hero} alt="Laying hens on JMK Egg Harvest farm at golden hour" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <img src={logo.url} alt="JMK Egg Harvest logo" className="h-16 w-16 rounded-full bg-card object-contain p-1 shadow-glow" />
          <a href="#contact" className="rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-forest shadow-glow transition hover:scale-105">Order Eggs</a>
        </nav>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-2 lg:pt-24">
          <div className="animate-rise">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold">
              <Leaf className="h-3.5 w-3.5" /> Proudly Zambian
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Golden mornings,<br /><span className="text-gradient-gold italic">fresh eggs.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg font-light text-forest-foreground/80">
              At JMK Egg Harvest we raise healthy, happy layer hens and bring their eggs straight from our farm to your table — freshness is our quality.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 font-semibold text-forest shadow-glow transition hover:scale-105"><Phone className="h-5 w-5" /> Call to order</a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/30 px-7 py-4 font-medium backdrop-blur transition hover:bg-forest-foreground/10"><Mail className="h-5 w-5" /> Email us</a>
            </div>
          </div>
          <div className="relative mx-auto hidden lg:block">
            <div className="absolute inset-0 rounded-full bg-gold/30 blur-3xl" />
            <img src={logo.url} alt="" className="relative h-[420px] w-[420px] animate-floaty rounded-full bg-card object-contain p-6 shadow-glow" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Why JMK</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Every egg tells a story of care</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { icon: Sun, t: "Collected daily", d: "Gathered fresh every morning so they reach you at their very best." },
            { icon: ShieldCheck, t: "Healthy hens", d: "Well-fed, vaccinated layers raised in clean, spacious housing." },
            { icon: Egg, t: "Rich & wholesome", d: "Strong shells and deep golden yolks, full of natural goodness." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-2">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-forest shadow-glow transition group-hover:rotate-6"><Icon className="h-7 w-7" /></div>
              <h3 className="font-display text-2xl font-semibold">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-secondary py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">What we sell</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Fresh eggs, by the tray or in bulk</h2>
            <p className="mt-6 text-lg text-muted-foreground">Whether it's breakfast for the family, a busy restaurant kitchen, or a shop shelf — we've got you covered.</p>
          </div>
          <div className="grid gap-4">
            {[["Single trays", "30 fresh eggs — perfect for homes"], ["Bulk orders", "For shops, restaurants & caterers"], ["Regular supply", "Scheduled weekly deliveries"]].map(([t, d], i) => (
              <div key={t} className="flex items-center gap-5 rounded-2xl bg-card p-6 shadow-soft">
                <span className="font-display text-4xl font-extrabold text-gradient-gold">0{i + 1}</span>
                <div><h3 className="text-lg font-semibold">{t}</h3><p className="text-muted-foreground">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-forest py-28 text-forest-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Get in touch</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Ready for <span className="text-gradient-gold italic">fresh eggs?</span></h2>
          <p className="mx-auto mt-6 max-w-xl text-forest-foreground/75">Call, text or email us to place your order.</p>
          <div className="mt-14 grid gap-6 text-left md:grid-cols-2">
            <div className="rounded-3xl border border-gold/25 bg-forest-foreground/5 p-8 backdrop-blur">
              <Phone className="h-8 w-8 text-gold" />
              <p className="mt-4 text-sm uppercase tracking-widest text-forest-foreground/60">Phone</p>
              <a href={`tel:${PHONE}`} className="mt-1 block font-display text-3xl font-semibold transition hover:text-gold">{PHONE_DISPLAY}</a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-forest"><Phone className="h-4 w-4" /> Call</a>
                <a href={`sms:${PHONE}`} className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm transition hover:bg-gold hover:text-forest"><MessageCircle className="h-4 w-4" /> Text</a>
                <CopyBtn value={PHONE_DISPLAY} label="Phone number" />
              </div>
            </div>
            <div className="rounded-3xl border border-gold/25 bg-forest-foreground/5 p-8 backdrop-blur">
              <Mail className="h-8 w-8 text-gold" />
              <p className="mt-4 text-sm uppercase tracking-widest text-forest-foreground/60">Email</p>
              <a href={`mailto:${EMAIL}`} className="mt-1 block break-all font-display text-2xl font-semibold transition hover:text-gold md:text-3xl">{EMAIL}</a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-forest"><Mail className="h-4 w-4" /> Write email</a>
                <CopyBtn value={EMAIL} label="Email" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-forest py-10 text-center text-sm text-forest-foreground/60">
        <img src={logo.url} alt="" className="mx-auto mb-4 h-14 w-14 rounded-full bg-card object-contain p-1" />
        © {new Date().getFullYear()} JMK Egg Harvest · Freshness Our Quality
      </footer>
    </main>
  );
}
