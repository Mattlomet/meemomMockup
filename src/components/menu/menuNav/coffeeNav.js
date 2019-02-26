import React, { Component } from 'react';

class CoffeeNav extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
        <div className="container">

      <div className="columns">
          <div className="column">
            <span>
              <div className="has-text-weight-bold">French Toast</div>
              <div className="has-text-weight-semibold">DEATH BY CHOCOLATE || $10</div>
              <div className="has-text-weight-light">
                topped with chocolate mascarpone, chocolate chips, powdered sugar & drizzled with chocolate sauce
        </div>
            </span>
            <span>
              <div className="has-text-weight-bold">French Toast</div>
              <div className="has-text-weight-semibold">COOKIE BUTTER CUPS || $10</div>
              <div className="has-text-weight-light">
                stuffed with cookie butter. topped with crumbled reeses' peanut butter cups, powdered sugar & drizzled with vanilla sauce
        </div>
            </span>
            <span>
              <div className="has-text-weight-bold">French Toast</div>
              <div className="has-text-weight-semibold">TRUFFLE SHUFFLE || $10</div>
              <div className="has-text-weight-light">
                two pieces coated in grahaham cracker & stuffed with cookie butter. topped with  white chocolate chips, powdered sugar & drizzled with vanilla sauce
        </div>
            </span>
          </div>
          <div className="column">
            <span>
              <div className="has-text-weight-bold">French Toast</div>
              <div className="has-text-weight-semibold">THE BIG BUN (limited availability) || $10</div>
              <div className="has-text-weight-light">
                it's back! cinnamon roll cooked french toast style. topped with sweet cream cheese glaze, cinnamon sugar, powdered sugar & drizzled with vanilla & cinnamon maple glaze
        </div>
            </span>
            <span>
              <div className="has-text-weight-bold">Eggs</div>
              <div className="has-text-weight-semibold">THE LITTLE AMIGO || $10</div>
              <div className="has-text-weight-light">
                two eggs your way served over a garlic cheddar biscuit topped with chorizo, pico de gallo, hollandaise sauce & finished with chimuchurri
        </div>
            </span>
          </div>
          <div className="column">
            <span>
              <div className="has-text-weight-bold">Omelettes</div>
              <div className="has-text-weight-semibold">5 GUYS || $10</div>
              <div className="has-text-weight-light">
                bacon, chorizo, ham, pork roll & sausage
        </div>
            </span>
            <span>
              <div className="has-text-weight-bold">Omelettes</div>
              <div className="has-text-weight-semibold">THE BB KING || $9</div>
              <div className="has-text-weight-light">
                bacon, broccoli & cheddar
        </div>
            </span>
            <span>
              <div className="has-text-weight-bold">Pancakes</div>
              <div className="has-text-weight-semibold">THE WHITE OUT || $10</div>
              <div className="has-text-weight-light">
                white chocolate chips pancakes topped with french vanilla mascarpone, toasted marshmallows, powdered sugar & drizzled with vanilla sauce
        </div>
            </span>
          </div>

        </div>
        <div className="subtitle underlineSubtitle">
          Lunch
      </div>
      <div className="columns">
      <div className="column">
            <span>
              <div className="has-text-weight-bold">Wraps</div>
              <div className="has-text-weight-semibold">CONQUISTADOR || $10</div>
              <div className="has-text-weight-light">
                marinated chicken, avocado, pico de gallo, cheddar jack, chimichurri sauce & chipotle ranch all wrapped up in a warm whole wheat tortilla
        </div>
            </span>
            <span>
              <div className="has-text-weight-bold">Wraps</div>
              <div className="has-text-weight-semibold">GRAPE VINE || $9.5</div>
              <div className="has-text-weight-light">
                house-made chicken salad, golden raisins, grapes, granny smith apples, field greens & cranberry mayo all wrapped up in a warm whole wheat tortilla 
        </div>
            </span>
            <span>
              <div className="has-text-weight-bold">Wraps</div>
              <div className="has-text-weight-semibold">CRAN BAE WITH BRIE || $10</div>
              <div className="has-text-weight-light">
                grilled turkey, sliced tomatoes, brie, fields greens & cranberry mayo all warpped up in a warm whole wheat tortilla 
        </div>
            </span>
      </div>
          <div className="column">
            <span>
              <div className="has-text-weight-bold">Paninis</div>
              <div className="has-text-weight-semibold">THE JIMMYCHURRI || $12</div>
              <div className="has-text-weight-light">
                house-made short rib, marinated tomatoes & chimichurri sauce served on roasted garlic bread
        </div>
            </span>
            <span>
              <div className="has-text-weight-bold">Paninis</div>
              <div className="has-text-weight-semibold">MUSHROOM KINGDOM || $10</div>
              <div className="has-text-weight-light">
                sauteed portobello mushrooms, roasted red peppers, field greens, marinated tomatoes, fresh mozzarella & avocado spread
        </div>
            </span>
          </div>

      </div>
        </div>
    );
  }
}

export default CoffeeNav;
