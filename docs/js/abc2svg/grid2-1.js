// abc2svg - ABC to SVG translator
// @source: https://chiselapp.com/user/moinejf/repository/abc2svg
// Copyright (C) 2014-2021 Jean-Francois Moine - LGPL3+
//grid2.js-module to replace a voice in the music by a chord grid
abc2svg.grid2={do_grid:function(){var s,v,p_v,ix,cs,c_a_cs,bt,voice_tb=this.get_voice_tb()
for(v=0;v<voice_tb.length;v++){p_v=voice_tb[v]
if(!p_v.grid2)
continue
p_v.clef.invis=true;p_v.key.k_sf=p_v.key.k_a_acc=0;p_v.staffnonote=2
for(s=p_v.sym;s;s=s.next){delete s.a_dd
if(!s.dur){if(s.bar_type)
bt=s.time
continue}
s.invis=true;delete s.sl1;delete s.ti1
delete s.ti2
for(ix=0;ix<=s.nhd;ix++)
delete s.notes[ix].tie_ty
if(s.tf)
s.tf[0]=1
if(!s.a_gch){if(s.time==bt)
s.a_gch=c_a_cs
continue}
for(ix=0;ix<s.a_gch.length;ix++){gch=s.a_gch[ix]
if(gch.type=='g'){c_a_cs=s.a_gch
break}}}}},draw_gchord:function(of,i,s,x,y){var an
if(s.p_v.grid2){this.set_dscale(s.st)
an=s.a_gch[i]
if(an.type=='g'){this.use_font(an.font)
this.set_font(an.font)
this.xy_str(s.x+an.x,12-an.font.size*.5,an.text)}}else{of(i,s,x,y)}},output_music:function(of){abc2svg.grid2.do_grid.call(this);of()},set_fmt:function(of,cmd,param){if(cmd=="grid2"){var curvoice=this.get_curvoice()
if(curvoice){this.set_v_param("stafflines","...");curvoice.grid2=param}
return}
of(cmd,param)},set_hooks:function(abc){abc.draw_gchord=abc2svg.grid2.draw_gchord.bind(abc,abc.draw_gchord);abc.output_music=abc2svg.grid2.output_music.bind(abc,abc.output_music);abc.set_format=abc2svg.grid2.set_fmt.bind(abc,abc.set_format)}}
abc2svg.modules.hooks.push(abc2svg.grid2.set_hooks);abc2svg.modules.grid2.loaded=true
