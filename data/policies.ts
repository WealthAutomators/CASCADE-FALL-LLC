import { company } from "./company";

const addressLine = `${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.zip}`;

export const faqItems = [
  {
    question: "What does CASCADE FALL LLC sell?",
    answer:
      "We offer a contemporary lifestyle catalog spanning outdoor, home, kitchen and dining, travel, workspace, apparel, accessories, lighting, outdoor living, fitness, personal essentials, and gifts.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes. Complimentary standard shipping is included on orders over $75 within the contiguous United States. Orders under $75 have a flat rate of $9.99. Express shipping is available at checkout for $14.99.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping delivers in 3–5 business days. Express shipping delivers in 1–2 business days. You will receive a tracking number by email once an order ships.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery. Items must be unused and in original packaging. Visit the Returns page or email us for help starting a return.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. After an order ships, you will receive an email with a tracking number. You can also use the Track Order page with your order number and email address.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently we ship within the United States, including Alaska and Hawaii.",
  },
  {
    question: "How are products selected?",
    answer:
      "Each product is chosen for usefulness, materials, and how it fits a contemporary Pacific Northwest way of living — outdoor days, calm interiors, and everyday routines.",
  },
  {
    question: "How do I use a coupon code?",
    answer:
      "Enter your coupon code in the coupon field on the cart page and select Apply. Valid codes update the order total immediately. One coupon per order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay. Checkout on this site is a demonstration flow.",
  },
  {
    question: "How can I contact CASCADE FALL LLC?",
    answer: `Email ${company.email} or use the contact form. Please include your order number for order questions.`,
  },
];

export const shippingPolicy = {
  title: "Shipping Policy",
  description: "How CASCADE FALL LLC delivers orders.",
  sections: [
    {
      title: "Processing Time",
      content:
        "Orders are typically processed within 1–2 business days. Weekend and holiday orders ship the next business day.",
    },
    {
      title: "Shipping Methods & Rates",
      content: "",
      list: [
        "Standard Shipping (3–5 business days): $9.99 — complimentary on orders over $75",
        "Express Shipping (1–2 business days): $14.99",
        "Alaska & Hawaii: standard rates apply; delivery may take 5–7 business days",
      ],
    },
    {
      title: "Order Tracking",
      content:
        "Once an order ships, you will receive a confirmation email with a tracking number. Track the package from that email or on the Track Order page.",
    },
    {
      title: "Shipping Restrictions",
      content:
        "We currently ship to all 50 US states. We do not ship express orders to PO boxes. Oversized items may require additional time.",
    },
    {
      title: "Lost or Damaged Packages",
      content: `If a package arrives damaged or does not arrive within 10 business days of the estimated delivery date, email ${company.email}. We will work with the carrier to resolve the issue.`,
    },
  ],
};

export const returnPolicy = {
  title: "Return Policy",
  description: "If a CASCADE FALL LLC purchase is not right, we will help make it right.",
  sections: [
    {
      title: "30-Day Return Window",
      content:
        "Most items may be returned within 30 days of delivery for a refund or exchange. Items should be unused and in original packaging.",
    },
    {
      title: "How to Start a Return",
      content: "",
      list: [
        `Email ${company.email} with your order number and reason for return`,
        "We will send a prepaid return label within one business day",
        "Pack items securely in original packaging and attach the label",
        "Drop off at any authorized shipping location",
        "Refunds are processed within 5–7 business days of receiving the return",
      ],
    },
    {
      title: "Non-Returnable Items",
      content: "",
      list: [
        "Items marked as final sale",
        "Used or altered products",
        "Items without original packaging",
        "Gift cards",
      ],
    },
    {
      title: "Exchanges",
      content:
        "Need a different size or color? Contact us and we will arrange an exchange. Replacement shipping is complimentary when inventory allows.",
    },
  ],
};

export const refundPolicy = {
  title: "Refund Policy",
  description: "How refunds are handled for CASCADE FALL LLC orders.",
  sections: [
    {
      title: "Refund Eligibility",
      content:
        "Refunds are available for items returned within 30 days of delivery in unused condition with original packaging. Sale items are eligible unless marked as final sale.",
    },
    {
      title: "Refund Processing Time",
      content:
        "Once a return is received and inspected, refunds are processed within 5–7 business days to the original payment method. Banks may take an additional 3–5 business days to show the credit.",
    },
    {
      title: "Partial Refunds",
      content: "",
      list: [
        "Items with obvious signs of use may receive a partial refund",
        "Items returned without original packaging may incur a 15% restocking fee",
        "Shipping costs are non-refundable unless the return is due to our error",
      ],
    },
    {
      title: "Defective or Wrong Items",
      content:
        "If you receive a defective or incorrect item, contact us. We will provide a prepaid return label and issue a full refund including original shipping, or send a replacement.",
    },
    {
      title: "Contact Us",
      content: `Questions about refunds? Email ${company.email}.`,
    },
  ],
};

export const privacyPolicy = {
  title: "Privacy Policy",
  description: "How CASCADE FALL LLC collects, uses, and protects information.",
  sections: [
    {
      title: "Information We Collect",
      content:
        "When you visit the website, create an account, or place an order, we may collect your name, email address, shipping address, and payment information. We also collect browsing data through cookies to improve the shopping experience.",
    },
    {
      title: "How We Use Your Information",
      content: "",
      list: [
        "Process and fulfill orders",
        "Send order confirmations and shipping updates",
        "Respond to customer service requests",
        "Send marketing communications (with consent)",
        "Improve the website and product offering",
        "Prevent fraud and keep the site secure",
      ],
    },
    {
      title: "Information Sharing",
      content:
        "We do not sell personal information. We share data only with trusted service providers who help operate the business — such as shipping carriers and payment processors — and only as needed to provide those services.",
    },
    {
      title: "Cookies",
      content:
        "We use cookies to remember cart, wishlist, and preferences. You can disable cookies in your browser; some features may not function properly.",
    },
    {
      title: "Your Rights",
      content:
        "You may request access to, correction of, or deletion of personal data by contacting us at " +
        company.email +
        ". Washington residents have additional rights under applicable state privacy laws.",
    },
    {
      title: "Contact",
      content: `For privacy-related inquiries, email ${company.email} or write to: ${company.name}, ${addressLine}.`,
    },
  ],
};

export const termsPolicy = {
  title: "Terms & Conditions",
  description: "Please read these terms before using the CASCADE FALL LLC website.",
  sections: [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using the CASCADE FALL LLC website, you agree to these Terms and Conditions. If you do not agree, please do not use the website.",
    },
    {
      title: "Products & Pricing",
      content:
        "We aim to display accurate product descriptions, images, and pricing. Errors may occur. We reserve the right to correct errors and to update information without prior notice. Prices are in US dollars.",
    },
    {
      title: "Orders & Payment",
      content:
        "Placing an order constitutes an offer to purchase. We reserve the right to refuse or cancel any order. Checkout on this site is a demonstration experience.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website — including text, images, logos, and design — is the property of CASCADE FALL LLC and protected by copyright and trademark laws. You may not reproduce, distribute, or use our content without written permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "CASCADE FALL LLC shall not be liable for any indirect, incidental, or consequential damages arising from use of the website or products. Total liability shall not exceed the amount paid for the product in question.",
    },
    {
      title: "Governing Law",
      content:
        "These terms are governed by the laws of the State of Washington, United States. Any disputes shall be resolved in the courts of Washington.",
    },
  ],
};
