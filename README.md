# CryptoCities

Welcome, this repository contains code for setting up both Region and Global CryptoCities Pages. Read below for more information.

## Setting up the Global CC Page

The Global Page needs no extra setup in DatoCMS. Add the below environment variables to your deployment platform

- `NUXT_PUBLIC_DATO_TOKEN` DatoCMS api token - found in DatoCMS -> Project Settings
- `NUXT_PUBLIC_IS_GLOBAL_SITE` Boolean value. True triggers the site to present as the 'global' CC page. Do not include if the site is not the global CC page.

Deployment Settings: 

- Build command: `nuxt build`
- Output directory: `dist`
- Install command: `yarn install`
- Node version: `18.x`

## Setting up a new Region

### Region

- Navigate to Regions in the sidebar and click the '+ New Record' button to add a region. 
- Fill in the required details:
  - The region 'status' here is important. This will control whether the site is shown on the global page. For now leave it as 'hidden' so the site does not show up.
  - In addition add the locales required for this Region.
- Once you are happy with these values save the Region and then publish it. (The region must be published to be viewed when we setup it's website)

### HomePage

- Navigate to the 'General Pages -> Home Pages' tab in the sidebar and create a new Homepage.
- If you want you can duplicate an existing Homepage by clicking one to open it, click the three dots next to the title and select 'Duplicate'
- Once you have created a new Homepage or made a duplicate ensure you update the 'Region' field to your recently created one.
- Now save and publish the page

Now that you have a region and homepage setup and published we have enough to setup the regions website.

### Deploy Site

All CryptoCity (CC) sites are created using this repo. To setup different regions we use Environment Variables:

- `NUXT_PUBLIC_DATO_TOKEN` DatoCMS api token - found in DatoCMS -> Project Settings
- `NUXT_PUBLIC_DATO_REGION_ID` This is the domain the site is hosted. This should match the domain field in the Dato region being targeted.
- `NUXT_PUBLIC_DATO_DEFAULT_LOCALE` Default language/locale for the deployment. This must be a locale present within the targeted regions pages.

Deployment Settings: 

- Build command: `nuxt build`
- Output directory: `dist`
- Install command: `yarn install`
- Node version: `18.x`

Using this setup and Environment Variables the site should run and target your specified region.

From here you can continue to create more pages and cities for your region. This can be helped by utilising Preview Mode.

### Preview Mode

DatoCMS allows a preview mode where any content which is a draft can be viewed. To access this simply add `?preview=true` your base website url. This will set a variable locally and enter you into preview mode.

When in preview mode you will see a banner pinned to the bottom of the website. Click where specified on the banner to leave preview mode.

## Development

Tech stack

- Nuxt3
- TailwindCSS
- DatoCMS

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
