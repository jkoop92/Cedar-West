// Cedar West Apartments — site interactions

document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// AJAX submit to Formspree so users get an inline success message
// instead of leaving the page (keeps them on-site, better for tracking conversions).
function wireLeadForm(formId, statusId, buttonId) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  const button = document.getElementById(buttonId);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = '';
    button.disabled = true;
    button.textContent = 'Sending...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        status.className = 'form-status success';
        status.textContent = "Thanks! Your request has been sent — we'll be in touch shortly.";
        if (window.gtag) {
          window.gtag('event', 'generate_lead', { form_id: formId });
        }
      } else {
        const data = await response.json().catch(() => null);
        const msg = data && data.errors ? data.errors.map((err) => err.message).join(', ') : null;
        status.className = 'form-status error';
        status.textContent = msg || 'Something went wrong. Please call us at (319) 505-3056.';
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = 'Something went wrong. Please call us at (319) 505-3056.';
    } finally {
      button.disabled = false;
      button.textContent = 'Request Info';
    }
  });
}

wireLeadForm('leadForm', 'formStatus', 'formSubmitBtn');
wireLeadForm('leadFormBottom', 'formStatusBottom', 'formSubmitBtnBottom');
