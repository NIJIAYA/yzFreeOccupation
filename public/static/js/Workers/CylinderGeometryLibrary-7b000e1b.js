define(["exports","./ComponentDatatype-17b06483"],(function(t,r){"use strict";var e={computePositions:function(t,e,n,o,a){var i,s=.5*t,u=-s,c=o+o,y=new Float64Array(3*(a?2*c:c)),f=0,m=0,p=a?3*c:0,h=a?3*(c+o):3*o;for(i=0;i<o;i++){var v=i/o*r.CesiumMath.TWO_PI,C=Math.cos(v),M=Math.sin(v),b=C*n,d=M*n,l=C*e,P=M*e;y[m+p]=b,y[m+p+1]=d,y[m+p+2]=u,y[m+h]=l,y[m+h+1]=P,y[m+h+2]=s,m+=3,a&&(y[f++]=b,y[f++]=d,y[f++]=u,y[f++]=l,y[f++]=P,y[f++]=s)}return y}};t.CylinderGeometryLibrary=e}));
