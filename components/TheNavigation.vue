<template>
  <header
    v-if="pages && !onGlobalPage"
    ref="root$"
    class="fixed left-0 top-16 z-50 mt-0 w-full px-16 transition-opacity"
    :class="[{
      'mb-32': pages.length > 0,
      'pointer-events-none opacity-0': localState.isScrolled,
      'pointer-events-auto !opacity-100': localState.isSticky,
    }]"
  >
    <div
      v-if="pages"
      ref="root$"
      class="flex w-full items-center justify-between gap-x-16 rounded-8 bg-white p-16 text-left transition-[border-radius,opacity,box-shadow]"
      :class="[{
        'shadow': localState.isScrolled,
        'mb-32': pages.length > 0
      }, `bg-${backgroundColor}`]"
      :style="`background-color: ${firstSectionColor};`"
    >
      <div
        class="cursor-pointer opacity-100 transition-opacity hover:opacity-70 focus:opacity-70"
        @click="goHome"
      >
        <transition mode="out-in" name="slide-fade">
          <svg v-if="!useRoute().path.includes('cities')" class="h-32" viewBox="0 0 296 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.3375 11.4684C41.3375 11.4684 41.2427 11.4642 41.1479 11.46C41.1479 11.46 41.1479 11.46 41.053 11.4559L39.9153 11.4055L37.4461 11.3911L24.1517 11.2772L24.1559 11.1824C24.2928 5.96613 28.2833 1.68005 33.4409 1.05385C33.4409 1.05385 33.5357 1.05804 33.6305 1.06224C33.7253 1.06644 33.8201 1.07064 33.8201 1.07064L33.9149 1.07484L35.0526 1.12521L37.2417 1.03223L50.5361 1.14612L50.5318 1.24088C50.4855 6.55617 46.3961 10.9328 41.3375 11.4684Z" fill="#FC8702" />
            <path d="M21.9195 13.4675C21.9195 13.4675 21.9195 13.5624 21.8246 13.5624V13.8469L21.2552 14.6058L20.0214 16.7876L13.2834 28.2655C13.2834 28.2655 13.2834 28.2655 13.1885 28.2655C8.63313 25.6095 6.82998 19.9179 8.91783 15.175C8.91783 15.175 8.91784 15.0801 9.01274 15.0801C9.01274 14.9852 9.10764 14.8904 9.10764 14.8904L9.20254 14.7955L9.77196 13.8469L10.9108 11.9498L17.554 0.376953C17.554 0.376953 17.554 0.376953 17.6489 0.376953C22.2042 3.12787 24.0073 8.72455 21.9195 13.4675Z" fill="#E9B213" />
            <path d="M22.0174 46.0067C17.3672 48.6627 11.673 47.3347 8.54123 43.2557L8.44633 43.1609L8.35143 42.9712L8.25653 42.8763L7.68711 41.9277L6.54828 40.0305L0 28.4577C0 28.4577 0 28.4577 0.0949026 28.4577C4.74513 25.8017 10.4393 27.1297 13.5711 31.2086L13.666 31.3035L14.2354 32.2521L15.4691 34.4339L22.0174 46.0067Z" fill="#21BCA5" />
            <path d="M32.4572 57.956C32.4572 57.956 32.3623 57.956 32.2673 57.956C32.2673 57.956 32.2674 57.956 32.1724 57.956H31.0336H28.5661H15.2798V57.8611C15.2798 52.549 19.2657 48.1855 24.3904 47.5215C24.3904 47.5215 24.4853 47.5215 24.5802 47.5215C24.6751 47.5215 24.77 47.5215 24.77 47.5215H24.8649H26.0038H28.1865H41.4729V47.6163C41.5678 52.9284 37.6768 57.292 32.4572 57.956Z" fill="#0582CA" />
            <path d="M57.3192 44.2965C57.3192 44.2965 57.3191 44.3913 57.2242 44.3913L56.6548 45.3399L55.4211 47.5217L48.7779 58.9996C48.7779 58.9996 48.7779 58.9996 48.683 58.9996C44.1277 56.3436 42.2296 50.7469 44.3175 46.0039C44.3175 46.0039 44.3175 45.9091 44.4124 45.9091C44.4124 45.8142 44.5073 45.7194 44.5073 45.7194L44.6022 45.6245L45.1716 44.6759L46.3104 42.7787L52.9536 31.3008C52.9536 31.3008 52.9536 31.3008 53.0485 31.3008C57.509 33.9568 59.3121 39.5535 57.3192 44.2965Z" fill="#1F2348" />
            <path d="M66.7165 30.2569C62.1612 33.0078 56.3721 31.9643 53.1455 27.8854L53.0506 27.7905L52.9556 27.6008L52.8607 27.506L52.2913 26.5574L51.1525 24.6602L44.2246 13.372C44.2246 13.372 44.2246 13.372 44.3195 13.372C48.8748 10.6211 54.6639 11.6645 57.8906 15.7434L57.9855 15.8383L58.5549 16.7869L59.8835 18.8738L66.7165 30.2569C66.8114 30.2569 66.8114 30.2569 66.7165 30.2569Z" fill="#D94432" />
            <text
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Mulish"
              font-size="29"
              font-weight="bold"
              letter-spacing="0.9px"
            ><tspan x="74.1992" y="40.4475">{{ urlName }}</tspan></text>
          </svg>
          <svg v-else class="h-32" viewBox="0 0 301 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Mulish"
              font-size="21"
              font-weight="bold"
              letter-spacing="0.6px"
            ><tspan x="75" y="55.4275">{{ cityName }}</tspan></text>
            <text
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Mulish"
              font-size="29"
              font-weight="bold"
              letter-spacing="0.9px"
            ><tspan x="74.5" y="29.9475">{{ urlName }}</tspan></text>
            <path d="M42.5383 14.1628C42.5383 14.1628 42.4418 14.1586 42.3454 14.1543C42.3454 14.1543 42.3454 14.1543 42.249 14.15L41.092 14.0988L38.5809 14.0842L25.0612 13.9684L25.0655 13.872C25.2047 8.56725 29.2628 4.20853 34.5078 3.57171C34.5078 3.57171 34.6042 3.57598 34.7007 3.58025C34.7971 3.58452 34.8935 3.58879 34.8935 3.58879L34.9899 3.59305L36.1469 3.64428L38.373 3.54973L51.8927 3.66554L51.8885 3.76191C51.8413 9.16729 47.6826 13.6181 42.5383 14.1628Z" fill="#FC8702" />
            <path d="M22.7912 16.1952C22.7912 16.1952 22.7912 16.2917 22.6947 16.2917V16.5811L22.1156 17.3528L20.861 19.5716L14.0087 31.2441C14.0087 31.2441 14.0087 31.2441 13.9122 31.2441C9.27966 28.543 7.44595 22.755 9.56919 17.9316C9.56919 17.9316 9.56919 17.8352 9.6657 17.8352C9.6657 17.7387 9.76221 17.6422 9.76221 17.6422L9.85873 17.5458L10.4378 16.5811L11.5959 14.6518L18.3517 2.88281C18.3517 2.88281 18.3517 2.88281 18.4482 2.88281C23.0807 5.68035 24.9145 11.3719 22.7912 16.1952Z" fill="#E9B213" />
            <path d="M22.8906 49.2864C18.1615 51.9875 12.3709 50.637 9.186 46.4889L9.08949 46.3924L8.99298 46.1995L8.89647 46.103L8.3174 45.1384L7.15927 43.209L0.5 31.4401C0.5 31.4401 0.5 31.4401 0.596511 31.4401C5.32556 28.739 11.1162 30.0895 14.3011 34.2376L14.3976 34.3341L14.9767 35.2987L16.2313 37.5175L22.8906 49.2864Z" fill="#21BCA5" />
            <path d="M33.5071 61.4375C33.5071 61.4375 33.4106 61.4375 33.3141 61.4375C33.3141 61.4375 33.3141 61.4375 33.2176 61.4375H32.0594H29.5501H16.0386V61.3411C16.0386 55.9389 20.092 51.5014 25.3036 50.8262C25.3036 50.8262 25.4002 50.8262 25.4967 50.8262C25.5932 50.8262 25.6897 50.8262 25.6897 50.8262H25.7862H26.9443H29.1641H42.6756V50.9226C42.7722 56.3248 38.8152 60.7623 33.5071 61.4375Z" fill="#0582CA" />
            <path d="M58.7907 47.548C58.7907 47.548 58.7907 47.6445 58.6942 47.6445L58.1151 48.6091L56.8604 50.8279L50.1047 62.5004C50.1047 62.5004 50.1047 62.5004 50.0082 62.5004C45.3756 59.7993 43.4454 54.1077 45.5686 49.2844C45.5686 49.2844 45.5686 49.1879 45.6652 49.1879C45.6652 49.0915 45.7617 48.995 45.7617 48.995L45.8582 48.8985L46.4372 47.9339L47.5954 46.0045L54.3512 34.332C54.3512 34.332 54.3512 34.332 54.4477 34.332C58.9837 37.0331 60.8174 42.7246 58.7907 47.548Z" fill="#1F2348" />
            <path d="M68.3473 33.2702C63.7147 36.0678 57.8275 35.0066 54.5462 30.8586L54.4497 30.7621L54.3531 30.5692L54.2566 30.4727L53.6776 29.508L52.5194 27.5787L45.4741 16.0991C45.4741 16.0991 45.4741 16.0991 45.5706 16.0991C50.2032 13.3016 56.0903 14.3627 59.3717 18.5108L59.4682 18.6073L60.0473 19.5719L61.3985 21.6942L68.3473 33.2702C68.4438 33.2702 68.4438 33.2702 68.3473 33.2702Z" fill="#D94432" />
          </svg>
        </transition>
      </div>

      <ul
        class="hidden items-center gap-x-24 lg:flex"
      >
        <li
          v-for="item in pages"
          :key="String(item._modelApiKey)"
        >
          <NavigationLink
            v-if="item._modelApiKey !== 'home_page'"
            :text="item.navigationLabel"
            :link="'/' + item.slug"
            :page-model="item._modelApiKey.replace(/_.*/, '')"
            compact
            hide-arrow
          />
        </li>
        <li>
          <TheLink
            text="Contact"
            link="/contact"
            compact
            variant="info"
            hide-arrow
          />
        </li>
        <LocalizationDropdown />
      </ul>

      <!-- :is-inverted="usableBackgroundColor.needsColorInversion && !localState.isScrolled" -->
      <MobileMenu
        class="lg:hidden"
        :is-scrolled="localState.isScrolled"
        :is-sticky="localState.isSticky"
      />
    </div>
  </header>
  <header
    v-else
    ref="root$"
    class="fixed left-0 top-16 z-50 mt-0 w-full px-16 transition-opacity"
    :class="[{
      'pointer-events-none opacity-0': localState.isScrolled,
      'pointer-events-auto !opacity-100': localState.isSticky,
    }]"
  >
    <div
      ref="root$"
      class="flex w-full items-center justify-between gap-x-16 rounded-8 bg-white p-16 text-left transition-[border-radius,opacity,box-shadow]"
      :class="[{
        'shadow': localState.isScrolled,
      }, `bg-${backgroundColor}`]"
      :style="`background-color: ${firstSectionColor};`"
    >
      <div
        class="cursor-pointer opacity-100 transition-opacity hover:opacity-70 focus:opacity-70"
        @click="goHome"
      >
        <svg
          class="h-32 shrink-0"
          viewBox="0 0 810 151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M801.42 64.21a8.704 8.704 0 0 1-3.39-.68 8.211 8.211 0 0 1-4.51-4.52 8.25 8.25 0 0 1-.68-3.38 8.673 8.673 0 0 1 .68-3.39 7.58 7.58 0 0 1 1.8-2.71 8.828 8.828 0 0 1 2.68-1.85 8.312 8.312 0 0 1 3.39-.68 8.452 8.452 0 0 1 7.91 5.2 8.232 8.232 0 0 1 .68 3.39 8.588 8.588 0 0 1-.68 3.38 8.846 8.846 0 0 1-1.81 2.72 8.66 8.66 0 0 1-2.71 1.8 8.307 8.307 0 0 1-3.36.72Zm0-1.24a7.886 7.886 0 0 0 2.83-.57 6.33 6.33 0 0 0 2.26-1.58 6.987 6.987 0 0 0 1.46-2.26 7.773 7.773 0 0 0 .57-2.82 7.322 7.322 0 0 0-.57-2.82 6.338 6.338 0 0 0-1.46-2.26 6.05 6.05 0 0 0-2.26-1.47 7.285 7.285 0 0 0-5.65 0 7.808 7.808 0 0 0-2.26 1.47 5.91 5.91 0 0 0-1.47 2.26 7.81 7.81 0 0 0-.56 2.82c-.001.968.19 1.927.56 2.82a6.515 6.515 0 0 0 1.47 2.26 8.137 8.137 0 0 0 2.26 1.58c.9.35 1.856.529 2.82.53v.04Zm-3.61-2.37v-9.87h4.29a3.332 3.332 0 0 1 2.49.79 2.896 2.896 0 0 1 .9 2.15 2.484 2.484 0 0 1-.9 2c-.341.252-.723.442-1.13.56.22.12.33.12.45.23.399.36.676.836.79 1.36l.9 2.71h-2.26l-.9-2.94c-.11-.34-.23-.57-.56-.68a1.708 1.708 0 0 0-.8-.22h-1v3.72h-2.26l-.01.19Zm2.26-5.43h1.69c.439.03.875-.086 1.24-.33.28-.259.446-.618.46-1a1.125 1.125 0 0 0-.46-1 1.82 1.82 0 0 0-1.24-.34h-1.69v2.67ZM201.68 102.681v-54.55h10.05V72.3h.11l23.84-24.17h12.08l-26.32 26.21 28.13 28.34h-12.43l-25.3-25.3h-.11v25.3h-10.05ZM258.149 102.681v-54.55h23.85c6 0 10.62 1.47 13.9 4.29 3.28 2.82 5 6.78 5 11.86a15.995 15.995 0 0 1-2.26 8.59 14.202 14.202 0 0 1-6.33 5.42c-.84.371-1.709.672-2.6.9a9.425 9.425 0 0 1 2.38 1.13 12.309 12.309 0 0 1 4.17 5.2l8 17.16h-11l-8-17.73a5.807 5.807 0 0 0-3.28-3.61 14.757 14.757 0 0 0-5.31-.91h-8.47v22.14h-10.05v.11Zm10.05-29.59h12.2c3.5 0 6.21-.79 8-2.26a8.99 8.99 0 0 0 2.708-6.435 9 9 0 0 0-2.708-6.435c-1.81-1.47-4.52-2.15-8-2.15h-12.2v17.28ZM328.289 102.681v-22.92l-21.35-31.63h11.53l15 23.16 15-23.16h11.18l-21.35 31.74v22.81h-10.01ZM368.73 102.681v-54.55H393c6 0 10.62 1.47 13.67 4.29 3.05 2.82 4.74 6.89 4.74 12s-1.58 9-4.74 12-7.68 4.4-13.67 4.4h-14.22v22h-10l-.05-.14Zm9.94-29.93h13.1c3.27 0 5.76-.79 7.45-2.26a8.999 8.999 0 0 0 0-12.42c-1.69-1.47-4.18-2.26-7.45-2.26h-13.1v16.94ZM434.349 102.871v-46.42h-18.07v-8.24h46.08v8.24h-18.07v46.42h-9.94ZM467 75.35a32.336 32.336 0 0 1 3.16-14.91 22.767 22.767 0 0 1 9-9.71 27.661 27.661 0 0 1 14-3.5 26.65 26.65 0 0 1 14 3.5 23.085 23.085 0 0 1 9.15 9.71 32.193 32.193 0 0 1 3.16 14.8 33.804 33.804 0 0 1-3.16 14.91 24 24 0 0 1-9.15 9.82 29.697 29.697 0 0 1-28 0 23.05 23.05 0 0 1-9-9.82 33.657 33.657 0 0 1-3.16-14.8Zm10.5 0c0 6.1 1.36 11 4 14.46 2.64 3.46 6.55 5.19 11.74 5.19s8.93-1.69 11.75-5.19c2.82-3.5 4.06-8.25 4.06-14.46 0-6.21-1.35-11-4.06-14.46-2.71-3.46-6.66-5.08-11.75-5.08s-9.15 1.7-11.74 5.08-4.01 8.25-4.01 14.46h.01ZM549.89 103.481a40.53 40.53 0 0 1-12.08-1.7 28.696 28.696 0 0 1-9.49-4.63l3-7.79a38.744 38.744 0 0 0 5.53 3.16 27.603 27.603 0 0 0 6.1 1.92c2.268.46 4.577.688 6.89.68 4.07 0 7-.68 8.81-2a6.213 6.213 0 0 0 2.71-5.3 5.323 5.323 0 0 0-1.81-4.41c-1.24-1-3.5-1.81-6.66-2.48l-8.81-1.81c-5-1-8.81-2.71-11.29-5.2-2.48-2.49-3.73-5.64-3.73-9.71a15.135 15.135 0 0 1 2.71-8.92 17.388 17.388 0 0 1 7.57-5.88 29.413 29.413 0 0 1 11.45-2.2 33.001 33.001 0 0 1 10.74 1.69c3.053.98 5.862 2.6 8.24 4.75l-3 7.45a23.854 23.854 0 0 0-7.34-4.18 26.851 26.851 0 0 0-8.81-1.35c-3.62 0-6.55.67-8.58 2.14a6.848 6.848 0 0 0-3 5.88 5.75 5.75 0 0 0 1.92 4.51c1.24 1.13 3.38 2 6.43 2.6l8.7 1.7c5.2 1.013 9.04 2.707 11.52 5.08a12.481 12.481 0 0 1 3.73 9.49 14.865 14.865 0 0 1-2.6 8.58 17.568 17.568 0 0 1-7.45 5.76 28.926 28.926 0 0 1-11.4 2.17ZM594.17 102.681v-46.42H576.1v-8.24h46.08v8.24h-18.07v46.42h-9.94ZM619.469 102.681l24.73-54.55h8.36l25.07 54.55h-10.16l-5.54-12.65h-26.88l-5.53 12.65h-10.05Zm28.8-43.93-9.94 23.46h20.33l-10.17-23.49-.22.03ZM685.539 102.681v-54.55h19.88c6.21 0 11.52 1 15.81 3.16a22.338 22.338 0 0 1 9.83 9.27 29.804 29.804 0 0 1 3.39 14.79 29.672 29.672 0 0 1-3.39 14.68 22.57 22.57 0 0 1-9.83 9.38 35.154 35.154 0 0 1-15.81 3.27h-19.88Zm10.05-8.35h9.26c6.67 0 11.53-1.58 14.69-4.75s4.85-7.9 4.85-14.34c0-6.44-1.58-11.3-4.85-14.35-3.27-3.05-8.13-4.63-14.69-4.63h-9.26v38.07ZM756.131 102.681v-46.42h-18.07v-8.24h46.08v8.24h-18.07v46.42h-9.94Z"
          fill="#1D2348"
        /><path
          d="M89.46.11h41.68a27.263 27.263 0 0 1-7.987 19.343 27.28 27.28 0 0 1-19.343 7.987H62.24A27.18 27.18 0 0 1 89.46.11Z"
          fill="#FC8702"
        /><path
          d="M153.73 39.27c.11.23 20.78 36 20.78 36a27.246 27.246 0 0 1-30.357-1.944 27.239 27.239 0 0 1-7.023-8.056c-.12-.23-20.78-36-20.78-36a27.327 27.327 0 0 1 37.38 10Z"
          fill="#D94432"
        /><path
          d="M38.19 85.27c.11.23 20.78 36 20.78 36a27.251 27.251 0 0 1-37.39-10c-.11-.23-20.78-36-20.78-36a27.57 27.57 0 0 1 37.39 10Z"
          fill="#21BCA5"
        /><path
          d="M54.22 37.38c-.11.23-20.78 36-20.78 36a27.35 27.35 0 0 1-10-37.38c.11-.23 20.78-36 20.78-36a27.289 27.289 0 0 1 10 37.38Z"
          fill="#E9B213"
        /><path
          d="M151.92 114.52c-.11.23-20.78 36-20.78 36a27.36 27.36 0 0 1-8.027-7.04 27.36 27.36 0 0 1-5.412-20.232 27.357 27.357 0 0 1 3.439-10.108c.11-.23 20.78-36 20.78-36a27.324 27.324 0 0 1 13.445 27.272 27.319 27.319 0 0 1-3.445 10.108Z"
          fill="#1F2348"
        /><path
          d="M71.51 123.27h41.67a27.28 27.28 0 0 1-7.987 19.343A27.278 27.278 0 0 1 85.85 150.6H44.29a27.33 27.33 0 0 1 27.22-27.33Z"
          fill="#0582CA"
        /></svg>
      </div>
      <span v-if="tagLine" class="hidden text-blue-dark/60 md:block">{{ tagLine }}</span>
      <TheLink
        text="Contact"
        link="/contact"
        compact
        variant="info"
        hide-arrow
      />
      <!-- <MobileMenu
        class="lg:hidden"
        :is-scrolled="localState.isScrolled"
        :is-sticky="localState.isSticky"
      /> -->
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { useWebsiteStore } from '../store/store'

defineProps({
  backgroundColor: {
    type: String,
    default: 'white'
  },
  onGlobalPage: {
    type: Boolean,
    default: false
  },
  tagLine: {
    type: String,
    default: false
  }
})

const store = useWebsiteStore()
const pages = computed(() => store.pages)
let firstSectionColor = undefined as string | undefined
onMounted(() => {
  firstSectionColor = document?.querySelector('section')?.style.backgroundColor
})

const goHome = () => {
  store.setPageType('home')
  let link
  if (store.getCurrentLocale === useRuntimeConfig().public.DATO_DEFAULT_LOCALE) {
    link = '/'
  } else {
    link = '/' + store.getCurrentLocale + '/'
  }
  useRouter().push(link)
}

const urlName = window?.location.host.split(':')[0].split('.')[0].toUpperCase()
const cityName = computed(() => {
  return useRoute().path.split('/')[2].toUpperCase()
})
// Code for hide/show navbar
const localState = reactive({
  selectedApp: 0,
  prevScrollPos: 0,
  isSticky: false,
  isScrolled: false,
  activeModal: 0
})

const root$ = ref(null)

function handleHeaderStyles () {
  const currentScrollPos = window.pageYOffset

  if (root$.value) {
    localState.isScrolled = currentScrollPos > 0
    localState.isSticky = currentScrollPos > 0 && localState.prevScrollPos > currentScrollPos
  }

  localState.prevScrollPos = currentScrollPos
}

function initHeader () {
  localState.prevScrollPos = window.pageYOffset
  handleHeaderStyles()

  if (root$.value) {
    document.addEventListener('scroll', handleHeaderStyles, {
      passive: true
    })
  }
}

onMounted(() => {
  document.readyState !== 'loading' ? initHeader() : document.addEventListener('DOMContentLoaded', initHeader)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleHeaderStyles)
  document.removeEventListener('DOMContentLoaded', initHeader)
})

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
