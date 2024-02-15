## CryptoCities Master Site

Tech stack
- Nuxt3
- TailwindCSS
- DatoCMS

## Setup

Make sure to install the dependencies:

```bash
# install
yarn install

# development
yarn dev

# production build
yarn build

# preview build locally
yarn preview

```

## Deployment

All CryptoCity (CC) sites are created using this repo. To setup different regions we use Environment Variables:

- `NUXT_PUBLIC_DATO_TOKEN` DatoCMS api token
- `NUXT_PUBLIC_DATO_DOMAIN` This is the domain the site is hosted. This should match the domain field in the Dato region being targeted.
- `NUXT_PUBLIC_IS_GLOBAL_SITE` Boolean value. True triggers the site to present as the 'global' CC page. This shows all regions and acts as a filter to the various sub site urls. False allows for a region to be targeted
- `NUXT_PUBLIC_DATO_DEFAULT_LOCALE` Default language/locale for the deployment. This must be a locale present within the targeted regions pages.
