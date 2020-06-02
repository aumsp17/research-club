import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  imageUrl = '';
  name = '';
  description = '';
  caption = '';
  contents = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      switch (id) {
        case 'KKS43WluTiSynYHwhhpp':
          this.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/research-club-49df3.appspot.com/o/journies%2FKKS43WluTiSynYHwhhpp%2Fimages%2Fprofile.png?alt=media&token=1bebb525-0757-48ab-843d-a1dd01c9bd6e';
          this.name = 'Chatuthanai Savigamin';
          this.description = 'หลายคนอาจมองว่าการเริ่มทำวิจัยเป็นเรื่องยาก นิสิตที่ทำวิจัยก็คงมีแต่คนที่ฉลาดเกินคนธรรมดาเท่านั้นแหละ ถ้าพวกเขาเหล่านั้นได้มาอ่านเรื่องราวของ “บูม” จตุธนัย สะวิคามินกัน ก็คงจะประหลาดใจไม่มากก็น้อย \n\n\n\n บูมเป็นนิสิตแพทย์จุฬารุ่น 71 ที่มีประสบการณ์วิจัยมามากมาย รวมไปถึงได้มีโอกาสนำเสนอผลงานทางวิชาการในระดับนานาชาติ แต่จุดเริ่มต้นของเขานั้นง่ายเกินกว่าใครจะนึกถึง เพราะมาจากการเรียนในห้องเรียนธรรมดา ๆ วันหนึ่งก็เท่านั้น';
          this.caption = 'ปี 2019 บูมได้ไปนำเสนอผลงานที่ AMEE conferencce ที่กรุงเวียนนา ประเทศออสเตรีย';
          this.contents = [
            {
              question: 'พี่บูมเริ่มทำวิจัยเมื่อไร?',
              answer: 'พี่เริ่มทำงานวิจัยของตัวเองอย่างจริงจังตอน ปี 3 เทอม 1 แต่ที่เริ่มเข้า journal club คือตอนปี 2 เทอม 2 เรื่องมีอยู่ว่า  ตอนสมัยพี่อยู๋ปี 2 ทั้งรุ่นไม่มีใครทำวิจัยเลยหายากมากๆ ดุไกลตัวสุด ส่วนพี่ก็ไม่เคยทำวิจัยนะ แล้วปรากฎว่าวันหนึ่งพี่ผ่ากรอสอยู่จนค่ำ แล้วเจออาจารย์วิไล มาทำวิจัยดู variation ของท่อน้ำดี ปรากฎว่าว่าพี่หา variation ของท่อเจอแล้วเอาไปบอกอาจารย์ถูก หลังจากนั้นเลยคิดว่า ทำวิจัยก็ไม่ใช่เรื่องไกลตัวขนาดนั้นนะ เราอาจจะทำได้ก็ได้ หลังจากรู้สึกอย่างงั้น พี่ก็เริ่มเลย ขั้นต่อไปก็คือหาอาจารย์ที่ถูกโฉลกเลยครับ :) ซึ่งพี่ชอบตอนอาจารย์สิทธิ์ศักดิ์สอนมากเลยไปหาอาจารย์ ไม่ได้มีความรู้อะไรเป็นพิเศษหรอก'
            },
            {
              question: 'ไปหาอาจารย์ครั้งแรกเป็นอย่างไร',
              answer: 'ประหม่ามากเลย พี่ไม่เคยรู้จักอาจารย์มาก่อนนะ เดินดุ่มๆ ไปหาที่ภาคเลย วิจัยก็ไม่รู้จักมาก่อน อย่างเบลอ วันแรกที่ไปไม่ได้เจอเพราะไม่ได้นัดมาก่อน แต่พี่ก้ไปใหม่เลยได้เจอในครั้งที่สอง จำได้เลยอาจารย์ถามว่าแบบรู้จักวิจัยอะไรบ้าง สนใจอะไร คือ ไม่รู้อะไรเลยแค่ชอบอาจารย์เฉยๆ 55555 ตลกมาก '
            },
            {
              question: 'พรีเซนต์เปเปอร์ครั้งแรกเป็นอย่างไร',
              answer: 'ตื่นเต้นมากๆเลยนะ แบบในงานมี่แต่อาจารย์ทั้งจากไทยและต่างประเทศ คนก่อนหน้าและหลังพี่เป็นอาจารย์ทั้งคู่ แต่ว่าอาจารย์สิทธิศักดิ์เตรียมพี่ไปดีมาก ซ้อมไปไม่รู้กี่รอบเลย จนสุดท้ายพี่ก้ได้รางวัลกลับมานะ บอกเลยว่านิสิตก็ทำได้ขอแค่ตั้งใจและเตรียมตัวมาอย่างดี'
            },
            {
              question: 'ลำบากมั้ย เจออุปสรรคอะไรบ้าง แล้วพัฒนาก้าวผ่านมาได้ยังไง ',
              answer: 'เยอะเลยน้อง อุปสรรคมันมีอยู่ทุกขั้นเลย ตั้งแต่จะทำอะไรดี จะทำตอนไหน ทำกับใคร แต่เอาจริง ๆ นะ พี่คิดง่าย ๆ ว่า ต้องลองอะ 5555 ตอนที่เริ่มทำอะก็ไม่รู้หรอกว่าจะเจออะไรบ้าง แต่พี่เชื่อว่าทำได้ก็ลงไปลุยเลย ตอนแรกยังเปิด Pubmed ไม่เป็นเลยมั้ง 5555 ใช้ Google เอา แต่พี่ไม่ได้อยู่คนเดียวไง มีอาจารย์ที่ปรึกษาค่อยช่วยพี่อยู่ มีพี่	ในแล็บ ปัญหาทุกคนอันที่เจอก็ปรึกษาคนต่าง ๆ แล้วค่อยทำมันก็ผ่านได้หมดนะ อาจจะไม่หมด 5555'
            },
            {
              question: 'การทำวิจัยช่วยพัฒนาตัวพี่อย่างไร',
              answer: 'มันคือการเริ่มต้นทำสิ่งใหม่ๆด้วยตัวเองนะ ตั้งแต่หาเปเปอร์ ทำแล็บ คุยกับคนต่าง ๆ มากมาย ได้ฝึกความสามารถภหลายอย่างเลย และที่พี่ชอบที่สุดคือ ได้ฝึกการเริ่มต้นทำอะไรใหม่นี่แหละ'
            },
            {
              question: 'การทำวิจัยตั้งแต่เป็นนนิสิตแพทย์ดียังไง',
              answer: 'ก็พี่ว่าอย่างแรกเลยคือมันสนุกนะ เป็นการหาอะไรทำตอนเป็นนิสิตที่ดีอย่างหนึ่ง นอกจากนั้น ประโยชน์มันครอบมากเลยนะ พี่คิดว่าถ้าน้องได้ได้ทำเรื่องที่ตัวเองชอบและสนใจจริง ๆ แล้วเห็น process ของมัน เห็นประโยชน์ของมัน เหมือนดูลูกโตอะน้อง มันรู้สึกภูมิใจบอกไม่ถูก นอกจากนั้นอย่างที่ทุกคนทราบคือก็ทำให้เรารู้จักกับผู้คนมากขึ้น'
            },
            {
              question: 'อยากฝากอะไรถึงน้อง ๆ',
              answer: 'อย่ากลัวที่จะเริ่มอะไรใหม่ ๆ ครับ น้องไม่จำเป็นต้องรู้ทุกอย่างก่อนที่จะเริ่ม น้องอาจจะไม่รู้ว่าสนใจเรื่องอะไร อาจไม่มีพื้นฐานเลยแต่ขอให้กล้าเริ่มครับ'
            }
          ];
          break;
        case 'tUleF1AuUpOdA3Zu3zHO':
          this.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/research-club-49df3.appspot.com/o/journies%2FtUleF1AuUpOdA3Zu3zHO%2Fimages%2Fprofile.jpg?alt=media&token=6c2c8026-cd0a-44b4-bce9-89e35c90cd2b';
          this.name = 'Nattacha Srithawatpong';
          this.description = 'In one lecture others thought was so boring, her eyes shine bright. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et diam sapien. Suspendisse potenti. Quisque dignissim odio vel placerat mollis. Integer nec libero commodo, imperdiet risus eu, malesuada elit. Proin. The journey takes her a long way in her career.In one lecture others thought was so boring, her eyes shine bright. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et diam sapien. Suspendisse potenti. Quisque dignissim odio vel placerat mollis. Integer nec libero commodo, imperdiet risus eu, malesuada elit. Proin. The journey takes her a long way in her career.';
          break;
      }
    });
  }

}
