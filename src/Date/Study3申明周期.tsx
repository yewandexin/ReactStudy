import React, { Component } from 'react';

class Study3 extends Component {
  // 在16.2更新后使用了fiber技术，任务优先级较低，导致可能执行多次
  // componentWillMount(): void {
  //   console.log("willMolunt");
  //   // 第一次上树前最后一次修改状态的机会

  // }
  // componentDidMount(): void {
  //   // console.log("didMount");
  //   // 数据请求
  //   // 订阅函数
  //   // setInterval
  //   // 基于创建完的dom初始化。。。。BetterScroll

  // }


  componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {

  }                   //上一次的属性          //上一次的状态
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    
  }
  render() {
    console.log("render")
    return (
      <div>
        sss
      </div>
    );
  }
}

export default Study3;