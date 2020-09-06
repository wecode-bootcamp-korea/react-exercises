import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import YeongjaeShin from "./Assignments/Monsters/students/10th/Yeongjae-Shin/Monsters";
import IvoryCode from "./Assignments/Monsters/students/10th/ivory-code/Monsters";
import Bonbon0202 from "./Assignments/Monsters/students/10th/bonbon0202/Monsters";
import MinKyuPark from "./Assignments/Monsters/students/10th/7p3m1k/Monsters";
import Bhoon_coding from "./Assignments/Monsters/students/10th/Bhoon-coding/Monsters";
import ByeongSooLee_KR from "./Assignments/Monsters/students/10th/ByeongSooLee-KR/Monsters";
import Claire_euni from "./Assignments/Monsters/students/10th/claire-euni/Monsters";
import H_sick from "./Assignments/Monsters/students/10th/h-sick/Monsters";
import Dark2356 from "./Assignments/Monsters/students/10th/dark2356/Monsters";
import Dhgh95 from "./Assignments/Monsters/students/10th/dhgh95/Monsters";
import Igobyyj from "./Assignments/Monsters/students/10th/igobyyj/Monsters";
import Imhyeonji from "./Assignments/Monsters/students/10th/imhyeonji/Monsters";
import Jun4928 from "./Assignments/Monsters/students/10th/Jun4928/Monsters";
import junggyoo from "./Assignments/Monsters/students/10th/junggyoo/Monsters";
import kasumil from "./Assignments/Monsters/students/10th/kasumil/Monsters";
import KimJeongHo7784 from "./Assignments/Monsters/students/10th/Kim-Jeong-ho7784/Monsters";
import Limo_sum from "./Assignments/Monsters/students/10th/limo-sum/Monsters";
import Rudqo14 from "./Assignments/Monsters/students/10th/rudqo14/Monsters";
import Seo337dc from "./Assignments/Monsters/students/10th/seo337dc/Monsters";
import Taeheech from "./Assignments/Monsters/students/10th/taeheech/Monsters";
import Yojuyoon from "./Assignments/Monsters/students/10th/yojuyoon/Monsters";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Yeongjae-Shin" component={YeongjaeShin} />
          <Route exact path="/ivory-code" component={IvoryCode} />
          <Route exact path="/bonbon0202" component={Bonbon0202} />
          <Route exact path="/7p3m1k" component={MinKyuPark} />
          <Route exact path="/Bhoon-coding" component={Bhoon_coding} />
          <Route exact path="/ByeongSooLee-KR" component={ByeongSooLee_KR} />
          <Route exact path="/claire-euni" component={Claire_euni} />
          <Route exact path="/h-sick" component={H_sick} />
          <Route exact path="/dark2356" component={Dark2356} />
          <Route exact path="/dhgh95" component={Dhgh95} />
          <Route exact path="/igobyyj" component={Igobyyj} />
          <Route exact path="/imhyeonji" component={Imhyeonji} />
          <Route exact path="/Jun4928" component={Jun4928} />
          <Route exact path="/junggyoo" component={junggyoo} />
          <Route exact path="/kasumil" component={kasumil} />
          <Route exact path="/Kim-Jeong-ho7784" component={KimJeongHo7784} />
          <Route exact path="/limo-sum" component={Limo_sum} />
          <Route exact path="/rudqo14" component={Rudqo14} />
          <Route exact path="/seo337dc" component={Seo337dc} />
          <Route exact path="/taeheech" component={Taeheech} />
          <Route exact path="/yojuyoon" component={Yojuyoon} />
        </Switch>
      </Router>
    );
  }
}
