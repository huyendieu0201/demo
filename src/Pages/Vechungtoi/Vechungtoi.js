import React from "react";
import "./Vechungtoi.css"; // Đừng quên tạo file CSS nếu cần thêm phong cách riêng

const Vechungtoi = () => {
  return (
    <main>
      <div className="vechungtoi">
        <h1 className="vechungtoi-title">Về Chúng Tôi</h1>
        <p className="vechungtoi-paragraph">
          Các cô gái thân mến,
        </p>
        <p className="vechungtoi-paragraph">
          Với niềm đam mê bất tận với những món đồ trang sức nhỏ xinh, năm 2019 De Coco ra đời với mong muốn mang đến cho các cậu những món đồ trang sức bạc nữ tính, hiện đại và tinh tế. Nhiệt huyết, đam mê và sức trẻ là những gì chúng tớ có ở thời điểm ấy. Thật may những sản phẩm của De Coco được các cậu yêu thích và đón nhận. Và cứ thế, cứ thế, chúng tớ phát triển, đến gần hơn với các cô gái.
        </p>
        <p className="vechungtoi-paragraph">
          Từ những ngày đầu thành lập, De Coco vẫn luôn mang trong mình sứ mệnh: Không chỉ là trang sức bạc, chúng tớ mong muốn trở thành người bạn thân thiết của mọi cô gái, giúp các cậu tự tin và tỏa sáng.
        </p>
        <p className="vechungtoi-paragraph">
          Thật may mắn và tự hào khi được đi cùng những năm tháng thanh xuân của các cậu - những cô gái mộng mơ, trẻ tuổi, trẻ lòng, sống hết mình cho hiện tại và luôn nở nụ cười trên môi.
        </p>
        <p className="vechungtoi-paragraph">
          De Coco mong muốn trở thành thương hiệu trang sức bạc hàng đầu dành cho giới trẻ. Tầm nhìn có xa xôi, có khó khăn nhưng chúng tớ tin rằng các cậu vẫn sẽ đồng hành, là nguồn động lực to lớn để chúng tớ cố gắng.
        </p>
        <p className="vechungtoi-paragraph">
          Mãi bên nhau cậu nhé!
        </p>
        {/* Section Contact Form */}
        <section className="contact-form">
          <h2>WE WANT TO HEAR FROM YOU</h2>
          <form action="#">
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Vechungtoi;
