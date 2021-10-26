# Overview of the PIXL project

The general idea is to test the latest advances in deep learning (computer vision & reinforcement learning) and e-commerce to
create a more or less independent agent that can run the e-commerce store. The agent will have a Tinder-like interface where
consumers can vote and buy designs created by the agent. As the agent gets feedback, it will map out the latent space and try to
maximise likes and purchases of designs.

In total the project has 3 components:\
:desktop_computer: &nbsp;&nbsp;&nbsp; the UI/front-end. A headless ecom front-end built on Next.JS (this repo)\
:convenience_store: &nbsp;&nbsp;&nbsp; the Shopify store. Serves as a kind of store back-end, providing product managment, payments etc.\
:student: &nbsp;&nbsp;&nbsp; the Agent. The one to actually run the store. Composed of 2 subcomponents
- Desing creation. A General Adversarial Network combined with a Variational Auto Encoder
- Design evaluation. A reinforecement learning agent based on Deep Determinisitc Policy Gradient


## Graphical illustration of the architecture
<!DOCTYPE html>
<html>
<head>
<title>pixl-Page-3</title>
<meta charset="utf-8"/>
</head>
<body><div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers tags lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2021-10-26T10:40:00.604Z\&quot; agent=\&quot;5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36\&quot; etag=\&quot;PIofa1-xLS0NVwDiPO4T\&quot; version=\&quot;15.5.9\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;dK97rtsTGXFWtrHNIrq9\&quot; name=\&quot;Page-3\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
</body>
</html>




