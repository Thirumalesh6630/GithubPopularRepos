.app-container {
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  min-height: 100vh;
}

.responsive-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.heading {
  color: #0f172a;
  font-family: 'Lobster';
  font-size: 48px;
  margin-bottom: 48px;
}

.filters-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
}

.repositories-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  max-width: 1140px;
}

.failure-view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.failure-view-image {
  width: 250px;
  height: 180px;
}

@media screen and (min-width: 768px) {
  .error-view-image {
    width: 527px;
    height: 393px;
  }
}

.error-message {
  text-align: center;
  color: #334155;
  font-family: 'Bree Serif';
  font-size: 28px;
}

@media screen and (min-width: 768px) {
  .error-message {
    font-size: 48px;
  }
}
