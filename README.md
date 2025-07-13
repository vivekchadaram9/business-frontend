This is the planned folder structure 

/app
  ├─ layout.jsx          # Global layout
  ├─ page.jsx            # Home page
  ├─ about/page.jsx
  ├─ products/
  │   ├─ page.jsx        # Product list
  │   └─ [slug]/page.jsx # Product detail
  ├─ cart/page.jsx
  ├─ checkout/page.jsx
  ├─ api/                # Next.js API routes
  │   └─ ...
/components
  ├─ ui/                 # Reusable design components (Button, Card, etc.)
  ├─ layout/             # Header, Footer, etc.
  └─ product/            # ProductCard, ProductGrid, etc.
/lib
  ├─ utils.js
  ├─ constants.js
  └─ api.js              # Fetch logic (or swr/react-query config)
/hooks
  └─ useCart.js, useDarkMode.js
/styles
  └─ globals.css, tailwind.css
/public
  └─ images, favicon, assejs
/types
  └─ product.js, cart.js
/config
  └─ site.js, seo.js
