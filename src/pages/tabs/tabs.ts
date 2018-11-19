import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {UsagePage} from "../usage/usage";
import {NewsPage} from "../news/news";
import {MorePage} from "../more/more";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UsagePage;
  tab3Root = NewsPage;
  tab4Root = MorePage;

  constructor() {

  }
}
