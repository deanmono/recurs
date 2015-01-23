/**
 * Created by dean on 1/7/15.
 */

//Recurs('.wrapper').start();

var button = document.getElementById("button");

button.onmouseover = function()
{
    this.node = Recurs(this.id).node('sine', 300);

    this.node.start();
    console.log(this.node);
};

button.onmouseout = function()
{
    this.node.stop();
    console.log(this.node);
};