---
id: 18786ecf-d35c-4630-841e-9831df57c6ba
blueprint: about_me
title: 'About Me'
updated_by: 1cfd3a17-8ebc-4c6e-a6a7-74b95b4fcd53
updated_at: 1642880560
template: pages/about_me
hero_image: R0002981.jpg
introduction_text: 'I am a {{ "February 15 1996"  | years_ago }} years old WebDeveloper from Munich. For more than {{ "September 1 2013"  | years_ago }} years now I have worked in various companies, from large corporations to small agencies, and have learned a lot in the process. 2022 i decided to become self employed and follow my passion for Laravel and Vue.'
philosophy_title: 'How i work'
philosophy_description: 'I work since {{ "September 1 2013"  | years_ago }} years as a professional webdeveloper. At first, during my apprenticeship, i started with more frontend relatet topics but quickly became more of an allrounder adding PHP and MySQL to my skillset. After all this years doing professional and hobby projects a established a certain mindset and guidelines for writing code.'
philosophies:
  -
    title: 'Clean, Easy and Readable'
    description: 'I always try to write my code as if it were a story that some human can read. That means i want to be abel to read my code top to bottom without jumping in lines and quickly get an understanding of what is happening. To achive this i use several patterns and simple guidelines like: Early returns, no else, declarative names, typehinting.... and so on.  This makes maintaing a lot easier and fun.'
    icon: |-
      <svg class="h-em w-em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                           stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                                      </svg>
    type: philosophies
    enabled: true
  -
    title: 'Do it once ... or maybe twice'
    description: 'Coding is easy, isn''t it`. "Just write all of the logic in one class and call it a day."  Well not exactly often times we want to use, the software we write, for a longer time and need to maintain and extend it. While the "Quick and Dirty" way is fast, at first, it comes often with the cost of a hard maintaining and extending process, which costs a lot more time and is more vunerbal for bugs. So i try to think upfront about feature  and plan everything to a certain extend, or extract them into packages to opensource or reuse it later down the line. On the other hand i try to be very caution to not overengeneer things and get the Job as fast as possible done, with my quality standarts.'
    icon: |-
      <svg class="h-em w-em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                           stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                                      </svg>
    type: philosophies
    enabled: true
  -
    title: 'Automate as much as possible'
    description: 'Nobody likes busy work! And i am no exception, so i try to automate as much i can. For example if i have a commen tasks on the database like seeding, i write a command to do it for me. Or for deployment i use CI/CD to atomate testing assetcompilation and all the other things that need to be done to ensure a painless deploy.'
    icon: |-
      <svg class="h-em w-em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                           stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                      </svg>
    type: philosophies
    enabled: true
  -
    title: 'I will make mistakes'
    description: 'We are all just humans and we make mistakes. So with this in mind i try to make it as hard as possible for me to break something. What i mean with this: I write Unit/Feature/E2E Tests, i use Codesniffer and CSFixer so my code looks always the same, i typehint everythinig i can and i use static analysis to scout bugs before they occure on the live server.'
    icon: |-
      <svg xmlns="http://www.w3.org/2000/svg" class="h-em w-em" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    type: philosophies
    enabled: true
techstack_title: 'My favorite tech and tools'
techstack_items:
  - laravel
  - vue-js
  - tailwindcss
  - inertiajs
  - typescript
  - alpine-js
  - javascript
  - php
  - statamic
  - nuxt-js
  - css
  - mariadb
  - mysql
  - graphql
  - vitejs
  - storybook
  - phpunit
  - pest
  - psalm
  - phpstan
  - codesniffer
cv_title: 'My professional experiences'
cv_description: 'In my carreer a already worked for some diffrent companies and learnd a lot from diffrent project sizes and industries.'
cv_stations:
  -
    company: 'Format D GmbH'
    position: 'Full Stack Developer'
    logo: contractors/ForamtD.jpg
    date:
      start: '2021-08-01'
      end: '2022-01-18'
    type: cv_stations
    enabled: true
  -
    company: 'KP Family International GmbH'
    position: 'Full Stack Developer'
    logo: contractors/KPFamily.jpg
    date:
      start: '2021-03-01'
      end: '2021-07-31'
    type: cv_stations
    enabled: true
  -
    company: 'Links Der Isar GmbH'
    position: 'Full Stack Developer'
    logo: contractors/LinksDerIsar.jpg
    date:
      start: '2018-09-01'
      end: '2021-02-28'
    type: cv_stations
    enabled: true
  -
    company: 'Check24 Vergleichsportal'
    position: 'Junior PHP-Developer'
    logo: contractors/Check24.png
    date:
      start: '2016-11-01'
      end: '2018-09-30'
    type: cv_stations
    enabled: true
  -
    company: 'Arrabiata Solutions GmbH'
    position: 'Trainee Im Webdevelopment'
    logo: contractors/Arrabiata.jpg
    date:
      start: '2016-07-01'
      end: '2016-10-31'
    type: cv_stations
    enabled: true
  -
    company: 'Arrabiata Solutions GmbH'
    position: Auzubildender
    logo: contractors/Arrabiata.jpg
    date:
      start: '2013-09-01'
      end: '2016-06-30'
    type: cv_stations
    enabled: true
seotamic_title: title
seotamic_title_prepend: true
seotamic_title_append: true
seotamic_meta_description: empty
seotamic_open_graph_title: title
seotamic_open_graph_description: general
seotamic_twitter_title: title
seotamic_twitter_description: general
---
Its me
