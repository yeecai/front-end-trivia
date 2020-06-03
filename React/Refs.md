### Out the dataflow: refs

Normally if we need to do some change, we change props or state then re-render, but ref can skip the process let you manupite the dom
i.g. the <div> directly. 

In the ol project am working with, the whole map is refed as target on a <div> tag 

'''  
          <div
              ref={this.setRef}
              onContextMenu={this.handleContext}
          >
          </div>
'''

''' 
          setRef = (x = null) => {
              this.container = x;
          };
'''
'''
          this.map = new Map({
                  target: this.container,

                  ...the rest
          });
'''



(ref) [https://reactjs.org/docs/refs-and-the-dom.html]
