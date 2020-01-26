(this["webpackJsonpideogram-react"]=this["webpackJsonpideogram-react"]||[]).push([[0],{30:function(e,a,n){e.exports=n(42)},35:function(e,a,n){},41:function(e,a,n){},42:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(24),l=n.n(o),i=(n(35),n(2)),s=n(3),c=n(5),m=n(4),u=n(6),h=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},"This will show cards as in https://eweitz.github.io/ideogram.")}}]),a}(t.Component),d=n(1),p=n(14);function g(e){return{human:r.a.createElement("div",null,r.a.createElement("p",null,"A human genome is depicted below.  The grey and black bands in each chromosome represent  "," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Heterochromatin"},"heterochromatin"),". The pink region is the area around the "," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Centromere"},"centromere"),", and the blue represents variable regions."),r.a.createElement("p",null,"This ideogram shows most chromosomes in a "," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Ploidy"},"haploid")," state for "," ","simplicity.  For more accurate, diploid representation of human genomes, "," ","see ",r.a.createElement("a",{href:"ploidy-basic"},"Ploidy, basic")," and "," ",r.a.createElement("a",{href:"multiple-trio"},"Multiple, trio"),".")),mouse:r.a.createElement("div",null,r.a.createElement("p",null,"A mouse genome, with each chromosome rendered horizontally.")),eukaryotes:r.a.createElement("div",null,"Ideogram.js can display the genome of any hundreds of organisms, "," ","using data from ",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/assembly"},"NCBI Assembly"),".."),orthologs:r.a.createElement("div",null,r.a.createElement("p",null,"Compare gene locations across organisms.")),"homology-basic":r.a.createElement("div",null,r.a.createElement("p",null,"Pseudoautosomal regions (PAR) are the only parts of chromosomes X and Y that typically undergo genetic recombination.  PAR1 and PAR2 are depicted below.  See also ",r.a.createElement("a",{href:"homology-advanced"},"Compare, structure"),".")),"homology-advanced":r.a.createElement("div",null,r.a.createElement("p",null,"Large-scale insertions, deletions, and inversions are represented below. Focus on a particular large variation by clicking or hovering over a colored region.")),"annotations-basic":r.a.createElement("div",null,r.a.createElement("p",null,"The location of ",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/gene/672"},"BRCA1")," is depicted here in red.")),"annotations-overlaid":r.a.createElement("div",null,r.a.createElement("p",null,"Large-scale structural variations (SVs) can be depicted using colored overlays, as seen below.")),"annotations-tracks":r.a.createElement("div",null,r.a.createElement("p",null,"1000 ",r.a.createElement("a",{href:"https://github.com/eweitz/ideogram/blob/ca64a3c51e1b5ecaae89d2422ffc408565743644/scripts/create_annots.py#L68"},"randomly generated")," SNVs across the human genome. See also ",r.a.createElement("a",{href:"annotations-track-filters"},"Annotations, track filters"),".")),"annotations-external-data":r.a.createElement("div",null,r.a.createElement("p",null,"The ",r.a.createElement("a",{href:"https://www.acmg.net/"},"American College of Medical Genetics and Genomics")," (ACMG) recommends that laboratories performing clinical sequencing seek and report certain mutations in",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/clinvar/docs/acmg/"},"the genes depicted here."))),"annotations-file-url":r.a.createElement("div",null,r.a.createElement("p",null,"Load a BED file by specifying its URL, and see genome-wide data.",r.a.createElement("a",{href:"?asm=GRCh37&annotsUrl=https://raw.githubusercontent.com/NCBI-Hackathons/Scan2CNV/master/files/201113910010_R08C02.PennCnvOut.bed"},"Example"),".")),"annotations-histogram":r.a.createElement("div",null,r.a.createElement("p",null,"Distribution of all human genes throughout the genome. Filter all 20,000+ genes in < 100 milliseconds below. For a richer example, see ",r.a.createElement("a",{href:"differential-expression"},"Differential expression"),".")),"annotations-animated":r.a.createElement("div",null,r.a.createElement("p",null,"See genome-wide transitions in expression over time. Below, changes in gene expression in mouse lung tissue over two years, in three influenza dosage cohorts.")),"annotations-heatmap":r.a.createElement("div",null,r.a.createElement("p",null,"All human genes, annotated in heatmaps.  The proximal heatmap for each chromosome shows gene distribution by expression.  The distal heatmap shows gene distribution by type.")),"differential-expression":r.a.createElement("div",null,r.a.createElement("p",null)),"geometry-collinear":r.a.createElement("div",null,r.a.createElement("p",null,"Gene expression in four ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Oligodendroglioma"},"brain cancer"),"samples, showing 1p and 19q deletions. Data from ",r.a.createElement("a",{href:"https://github.com/broadinstitute/inferCNV"},"inferCNV"),". Unlike the",r.a.createElement("a",{href:"annotations-heatmap.html"},"parallel arrangement"),", this ideogram is collinear -- the chromosomes form a line together.")),"layout-small":r.a.createElement("div",null,r.a.createElement("p",null,'The small ideogram inset at left is an example of chromosome graphics surrounded by other content.  Instead of meaningless "Lorem ipsum" placeholder text, here is some background on the human reference genome assembly this ideogram depicts.'),r.a.createElement("p",null,'"In 2004, the Human Genome Project (HGP) published a finished version (Build35) of the human genome assembly (1). This was a major accomplishment that represented over a decade of effort by more than a dozen institutions and resulted in the highest quality vertebrate genome ever produced and a new tool for understanding human biology. Despite this achievement, a limited number of gaps, sequence and tiling path errors remained in the reference assembly. Thus, at the conclusion of the HGP and the release of their final assembly version (Build36 (UCSC name: hg18)), the GRC was conceived as a mechanism for continued stewardship and improvement of the human reference assembly."'),r.a.createElement("p",null,'"In 2009, the GRC produced an updated human assembly (GRCh37 (UCSC name: hg19))."  And in 2013, it produced the current major version of the human reference genome assembly, GRCh38.')),"layout-tabs":r.a.createElement("div",null),brush:r.a.createElement("div",null,r.a.createElement("p",null)),"ploidy-basic":r.a.createElement("div",null,r.a.createElement("p",null,'This diploid genome shows maternal ("M") and paternal ("P") chromosomes of a karyotypically normal human female (46,XX).')),"ploidy-rearrangements":r.a.createElement("div",null,r.a.createElement("p",null,"This triploid banana genome is a hybrid of",r.a.createElement("i",null,"Musa acuminata"),' ("A") and ',r.a.createElement("i",null,"Musa balbisiana"),' ("B").',r.a.createElement("br",null),"Chromosomal rearrangements shown below include:",r.a.createElement("ul",null,r.a.createElement("li",null,"Arm gained in a copy of chromosome 1"),r.a.createElement("li",null,"Arm lost in a copy of chromosome 2")))),"ploidy-recombination":r.a.createElement("div",null,r.a.createElement("p",null,"This triploid banana genome is a hybrid of",r.a.createElement("i",null,"Musa acuminata"),' ("A") and ',r.a.createElement("i",null,"Musa balbisiana"),' ("B").',r.a.createElement("br",null),"Recombination events shown below include:",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Gene conversion in a copy of chromosome 1"),r.a.createElement("li",null,"Double crossover in copies of chromosome 2")))),"multiple-trio":r.a.createElement("div",null,r.a.createElement("p",null,"Three diploid human genomes: a female, a male, and another male. See also ",r.a.createElement("a",{href:"multiple-trio-sv"},"Multiple, trio SV"),".")),"multiple-primates":r.a.createElement("div",null,r.a.createElement("p",null,"Two genes are annotated on each genome below: APOB (red) and CTLA4 (blue). Their locations give evidence of ancient chromosome fusions and shared evolutionary origin."))}[e.page]}var b=["human","mouse","eukaryotes","orthologs","homology-basic","homology-advanced","annotations-basic","annotations-overlaid","annotations-tracks","annotations-external-data","annotations-file-url","annotations-histogram","annotations-animated","annotations-heatmap","differential-expression","geometry-collinear","layout-small","layout-tabs","brush","ploidy-basic","ploidy-rearrangements","ploidy-recombination","multiple-trio","multiple-primates"],E={"homology-basic":"Compare PAR"};function f(e,a){var n=b.length;return 0===e&&"prev"===a?(console.log(n),n-1):e===n-1&&"next"===a?0:"next"===a?e+1:"prev"===a?e-1:void 0}var v=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.page,a=function(e){var a=e.slice(1).replace(/-/g," "),n=e[0].toUpperCase()+a;return e in E?E[e]:n}(e),n=function(e){var a=b.indexOf(e),n=f(a,"prev"),t=f(a,"next");return[b[n],b[t]]}(e),t=Object(d.a)(n,2),o=t[0],l=t[1],i="https://github.com/eweitz/ideogram-react/blob/gh-pages/".concat(e,".html");return r.a.createElement("header",null,r.a.createElement("h1",null,a," | Ideogram"),r.a.createElement("a",{href:"/ideogram"},"Overview")," | "," ",r.a.createElement(p.b,{to:o},"Previous")," |  "," ",r.a.createElement(p.b,{to:l},"Next")," |  "," ",r.a.createElement(p.b,{to:i},"Source")," "," ",r.a.createElement(g,{page:e}))}}]),a}(t.Component),y=n(27),w=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){return new y.a({organism:this.props.organism,dataDir:"https://unpkg.com/ideogram@1.16.0/dist/data/bands/native/",container:"#ideo-container"})}},{key:"render",value:function(){return r.a.createElement("div",{id:"ideo-container"})}}]),a}(t.Component),k=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{page:"human"}),r.a.createElement(w,{organism:"human"}))}}]),a}(t.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{page:"mouse"}),r.a.createElement(w,{organism:"mouse"}))}}]),a}(t.Component),C=(n(41),n(13));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Overview")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/human"},"Human")))),r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(C.a,{path:"/human",component:k}),r.a.createElement(C.a,{path:"/mouse",component:O}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.d8b8e420.chunk.js.map