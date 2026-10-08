

const css = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
.ct{--bg:#000;--fg:#fff;--muted:#9a9aa6;--accent:#a78bfa;--line:rgba(255,255,255,.1);box-sizing:border-box;position:relative;overflow:hidden;background:var(--bg);color:var(--fg);font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;padding:112px 24px;text-align:center}
.ct *,.ct *::before,.ct *::after{box-sizing:inherit}
.ct::before{content:"";position:absolute;left:50%;top:-180px;width:900px;height:520px;max-width:140%;transform:translateX(-50%);background:radial-gradient(closest-side,rgba(139,92,246,.28),transparent);pointer-events:none}
.ct-wrap{position:relative;max-width:880px;margin:0 auto}
.ct-eyebrow{color:var(--accent);font-weight:500;font-size:15px;margin:0 0 14px}
.ct h1{margin:0;font-size:clamp(38px,6vw,60px);line-height:1.05;font-weight:600;letter-spacing:-.03em;background:linear-gradient(180deg,#fff 30%,#8b8b96);-webkit-background-clip:text;background-clip:text;color:transparent}
.ct-sub{margin:20px auto 0;max-width:420px;color:var(--muted);font-size:18px;line-height:1.55}
.ct-grid{display:grid;grid-template-columns:1fr 1fr;margin-top:72px;border:1px solid var(--line);border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.01))}
.ct-item{padding:44px 32px 48px;display:flex;flex-direction:column;align-items:center}
.ct-item+.ct-item{border-left:1px solid var(--line)}
.ct-icon{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;color:var(--accent);background:rgba(139,92,246,.12);box-shadow:0 0 0 1px rgba(167,139,250,.28),0 0 32px rgba(139,92,246,.25)}
.ct-icon svg{width:24px;height:24px}
.ct h2{margin:28px 0 8px;font-size:19px;font-weight:600;letter-spacing:-.01em}
.ct-item p{margin:0;color:var(--muted);font-size:16px;line-height:1.5}
.ct-item a{margin-top:24px;color:#fff;font-weight:500;font-size:16px;text-decoration:none;padding-bottom:3px;border-bottom:1px solid rgba(167,139,250,.5);transition:color .2s,border-color .2s}
.ct-item a:hover{color:var(--accent);border-color:var(--accent)}
.ct a:focus-visible{outline:2px solid var(--accent);outline-offset:4px;border-radius:4px}
@media (max-width:640px){.ct{padding:72px 20px}.ct-grid{grid-template-columns:1fr;margin-top:48px}.ct-item+.ct-item{border-left:0;border-top:1px solid var(--line)}}
`;

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
);

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
);

const defaultItems = [
    { icon: <MailIcon />, title: "Email", text: "Our friendly team is here to help.", label: "hi@untitledui.com", href: "mailto:hi@untitledui.com" },
    { icon: <PhoneIcon />, title: "Phone", text: "Mon-Fri from 8am to 5pm.", label: "+1 (555) 000-0000", href: "tel:+15550000000" },
];

export default function Contact({
    eyebrow = "Contact us",
    heading = "Get in touch",
    subheading = "Our friendly team is always here to chat.",
    items = defaultItems,
}) {
    return (
        <section className="ct">
            <style>{css}</style>
            <div className="ct-wrap">
                <p className="ct-eyebrow">{eyebrow}</p>
                <h1>{heading}</h1>
                <p className="ct-sub">{subheading}</p>
                <div className="ct-grid">
                    {items.map((it) => (
                        <div className="ct-item" key={it.title}>
                            <div className="ct-icon">{it.icon}</div>
                            <h2>{it.title}</h2>
                            <p>{it.text}</p>
                            <a href={it.href}>{it.label}</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}