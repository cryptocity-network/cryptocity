# CryptoCities

Welcome, this repository contains code for setting up both Region and Global CryptoCities Pages. Read below for more information.

---

## Setting up the Global CC Page

The Global Page needs no extra setup in DatoCMS. Add the below environment variables to your deployment platform

- `NUXT_PUBLIC_DATO_TOKEN` DatoCMS api token - found in DatoCMS -> Project Settings
- `NUXT_PUBLIC_IS_GLOBAL_SITE` Boolean value. True triggers the site to present as the 'global' CC page. Do not include if the site is not the global CC page.

Deployment Settings: 

- Build command: `nuxt build`
- Output directory: `dist`
- Install command: `yarn install`
- Node version: `18.x`

---

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
- `NUXT_PUBLIC_DATO_REGION_ID` The Record ID of the region page in DATO. Open the side panel on the record to find this.
- `NUXT_PUBLIC_DATO_DEFAULT_LOCALE` Default language/locale for the deployment.
- `NUXT_PUBLIC_DATO_REGION_LOCALES` Comma separated list of locales which a region supports, including the default.
- `NUXT_PUBLIC_IS_GLOBAL_SITE` BOOLEAN - should always be false unless this is the global page (cryptocity.network)


Example:
```
NUXT_PUBLIC_DATO_TOKEN={add token here}
NUXT_PUBLIC_DATO_REGION_ID=OPCWcIegTgS_cqYgyxdgKw
NUXT_PUBLIC_DATO_DEFAULT_LOCALE=en
NUXT_PUBLIC_DATO_REGION_LOCALES=en,fr,de
NUXT_PUBLIC_IS_GLOBAL_SITE=false
```

Deployment Settings: 

- Build command: `nuxt build`
- Output directory: `dist`
- Install command: `yarn install`
- Node version: `18.x`

Using this setup and Environment Variables the site should run and target your specified region.

From here you can continue to create more pages and cities for your region. This can be helped by utilising Preview Mode.

---

## Adding a new locale

To add a new locale:

- DatoCMS
  - Click `configuration` in the top bar
  - Add necessary locale in locale multiselect
  - Save settings
  - Go to the region record which will use the new locale and add a translation for the new locale
  - Then add this new locale to all pages this region relates to.
  - Navigation to `Translation` on the sidebar and fill out the generic translations for the new locale
- Code
  - Add a new lang file named as the lang-abbreviation.js
  - Copy the code below swapping 'en' for your locale appreviation
    ```
    export default defineI18nLocale(async () => {
      const { data } = await useGraphqlQuery(`
        query {
            translation(locale: en) {
                translations
            }
        }`)
      return data.value.translation.translations
    })

    ```
  - Save and push the change

Now update the env variables to allow your deployment to detect the new locale.
Your new locale should now be functional.

---

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
