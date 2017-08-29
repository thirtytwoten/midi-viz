function drawStackGraph(id) {
  let width = 800, height = 400;
  let baseY = height/2;
  let stackWidth = width/14;
  let stackHeight = stackWidth/2;
  let margin = 2;
  let heightMultiplier = 3;

  let data = JSON.parse($(`#${id}`).first().attr('data'));
  if(data) {
    let notesStack = data.notesStack;
    
    let maxCount = 0;
    for (note in notesStack) {
        maxCount = getMaxHeight(note, notesStack[note], maxCount);
    }
    heightMultiplier = (height / 10) / maxCount;
    
    let svg = d3.select(`#${id}`).append("svg").attr("height", height).attr("width", width);
    let x = 0;
    for(note in notesStack){
      x += stackWidth;
      let g = svg.append('g')
        .attr('id',`group${note}`)
        .attr('transform', `translate(${x},0)`);
      g.append('rect')
        .attr('class', `base n${note}`)
        .attr('width', stackWidth - margin)
        .attr('height', stackHeight)
        .attr('x', 0)
        .attr('y', baseY);
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'central')
        .attr('x', (stackWidth - margin) / 2)
        .attr('y', baseY + stackHeight/2)
        .text(note.replace('s','#'));
      drawStacks(svg, note, notesStack[note]);
    }
  }

  function drawStacks(svg, baseNoteName, baseNoteObj){
    drawStack(svg, baseNoteName, baseNoteObj, "leading");
    drawStack(svg, baseNoteName, baseNoteObj, "following");
  }
  
  function getMaxHeight(baseNoteName, baseNoteObj, maxCount) {
    for (note in baseNoteObj["leading"]){
      let currentCount = baseNoteObj["leading"][note];
      if (currentCount > 0 && currentCount > maxCount) {
          maxCount = currentCount;
      }
    }
    for (note in baseNoteObj["following"]){
      let currentCount = baseNoteObj["following"][note];
      if (currentCount > 0 && currentCount > maxCount) {
          maxCount = currentCount;
      }
    }
    return maxCount;
  }

  function drawStack(svg, baseNoteName, baseNoteObj, stackType) {
    let leadingY = baseY  + stackHeight + margin;
    let followingY = baseY;
    for(note in baseNoteObj[stackType]){
      let count = baseNoteObj[stackType][note];
      if (count > 0) {
        let height = count * heightMultiplier;
        followingY -= height + margin;
        svg.select(`#group${baseNoteName}`).append('rect')
          .attr('class', `stack n${note} ${stackType}`)
          .attr('width', stackWidth - margin)
          .attr('height', height)
          .attr('y', stackType==="following" ? followingY : leadingY)
          .attr('x', 0)
        leadingY += height + margin;
      }
    }
  }

};

$(document).ready(function(){
  drawStackGraph('bwv846');
});