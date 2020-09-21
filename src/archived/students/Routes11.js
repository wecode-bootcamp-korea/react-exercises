import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import aglet870 from "./Assignments/Monsters/students/11th/aglet870/Monsters";
import chan97 from "./Assignments/Monsters/students/11th/chan-97/Monsters";
import choaceb from "./Assignments/Monsters/students/11th/choaceb/Monsters";
import codeamor from "./Assignments/Monsters/students/11th/codeamor/Monsters";
import cyheum from "./Assignments/Monsters/students/11th/cyheum/Monsters";
import daseulsongme from "./Assignments/Monsters/students/11th/daseulsongme/Monsters";
import doyoonear from "./Assignments/Monsters/students/11th/doyoonear/Monsters";
import jjoNiixx from "./Assignments/Monsters/students/11th/jjo-niixx/Monsters";
import jjwlsdk from "./Assignments/Monsters/students/11th/jjwlsdk/Monsters";
import Kangyejiii from "./Assignments/Monsters/students/11th/Kangyejiii/Monsters";
import kgwoo from "./Assignments/Monsters/students/11th/kgwoo/Monsters";
import LeeHoHyunHemtory from "./Assignments/Monsters/students/11th/LeeHoHyun-hemtory/Monsters";
import ovovv from "./Assignments/Monsters/students/11th/ovovv/Monsters";
import psy082 from "./Assignments/Monsters/students/11th/psy082/Monsters";
import recurian1058 from "./Assignments/Monsters/students/11th/recurian1058/Monsters";
import ryuinkyoto from "./Assignments/Monsters/students/11th/ryuinkyoto/Monsters";
import sanghunlee711 from "./Assignments/Monsters/students/11th/sanghunlee-711/Monsters";
import sangkuOH from "./Assignments/Monsters/students/11th/sangkuOH/Monsters";
import seobie from "./Assignments/Monsters/students/11th/seobie/Monsters";
import seunghaOh from "./Assignments/Monsters/students/11th/seungha-oh/Monsters";
import ssamwonn from "./Assignments/Monsters/students/11th/ssamwonn/Monsters";
import wnduq8 from "./Assignments/Monsters/students/11th/wnduq8/Monsters";
import yjkeem0918 from "./Assignments/Monsters/students/11th/yjkeem0918/Monsters";
import yoonminsohappy from "./Assignments/Monsters/students/11th/yoonminsohappy/Monsters";
import younuk23 from "./Assignments/Monsters/students/11th/younuk23/Monsters";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/aglet870" component={aglet870} />
          <Route exact path="/chan97" component={chan97} />
          <Route exact path="/choaceb" component={choaceb} />
          <Route exact path="/codeamor" component={codeamor} />
          <Route exact path="/cyheum" component={cyheum} />
          <Route exact path="/daseulsongme" component={daseulsongme} />
          <Route exact path="/doyoonear" component={doyoonear} />
          <Route exact path="/jjo-niixx" component={jjoNiixx} />
          <Route exact path="/jjwlsdk" component={jjwlsdk} />
          <Route exact path="/Kangyejiii" component={Kangyejiii} />
          <Route exact path="/kgwoo" component={kgwoo} />
          <Route exact path="/LeeHoHyun-hemtory" component={LeeHoHyunHemtory} />
          <Route exact path="/ovovv" component={ovovv} />
          <Route exact path="/psy082" component={psy082} />
          <Route exact path="/recurian1058" component={recurian1058} />
          <Route exact path="/ryuinkyoto" component={ryuinkyoto} />
          <Route exact path="/sanghunlee-711" component={sanghunlee711} />
          <Route exact path="/sangkuOH" component={sangkuOH} />
          <Route exact path="/seobie" component={seobie} />
          <Route exact path="/seungha-oh" component={seunghaOh} />
          <Route exact path="/ssamwonn" component={ssamwonn} />
          <Route exact path="/wnduq8" component={wnduq8} />
          <Route exact path="/yjkeem0918" component={yjkeem0918} />
          <Route exact path="/yoonminsohappy" component={yoonminsohappy} />
          <Route exact path="/younuk23" component={younuk23} />
        </Switch>
      </Router>
    );
  }
}
