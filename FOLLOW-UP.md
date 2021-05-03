# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

The following libraries were added to the frontend besides React.

1. Next was added initially using create-next-app to build this project with NextJS.
2. Sass and @zeit/next-sass were used to allow for SCSS imports to work for components.
3. React-bootstrap and bootstrap were used for styling and mobile-first layouts.
4. React Testing library was used (@testing-library/jest-dom and @testing-library/react) for unit and integration tests of the components.
5. identity-obj-proxy was added so that SCSS imports would not break during jest tests.
6. jest was used for testing.
7. babel-jest was added for integration with jest testing.

### Q) What's the command to start the application locally?

(Default) `npm start`

---

# General:

### Q) If you had more time, what further improvements or new features would you add?

For further improvements, I'd like to add some further state to handle data fetching conditions. At the moment, since the flights data is fetched from JSON, I did not add in error, loading, or empty data states for the app. THis is unrealistic in real life, so that would be the next step for this app if it used an actual API.

### Q) Which parts are you most proud of? And why?

I am most proud of my component design and separation of concerns I implemented for the app. I think that this assignment was relatively simple, so I wanted to highlight the importance of communicating my work effectively. I tried to separate components in a clean fashion, and document the data flow from loading props down to the individual sections of a FlightCard. In addition, I wanted to supplement my documentation with sufficient testing by at least adding snapshot and smoke tests for each component and a more comprehensive integration test of the index page.

### Q) Which parts did you spend the most time with? What did you find most difficult?

I definitely spent the most time understanding how Next JS works, just wanting to have a better fundamental basis of the framework before jumping into any work. I found that the app did not necessarily take advantage of all that NextJS has to offer, but found it fun to explore this framework in depth. The most difficult parts troubleshooting the app with existing libraries like the Backpack mixins and Jest. After struggling with it and realizing that maybe Next JS isn't configured with the Backpack imports, and opted for using Bootstrap instead. Afterwards, it was smooth sailing playing around with the layouts and stylings.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.

I found the test to be very self-contained and straightforward. Only difficulties were the initial learning curve of transitioning to Next from CRA with existing modules and libraries.
