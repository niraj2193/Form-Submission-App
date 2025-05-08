using System.ComponentModel.DataAnnotations;

namespace UserFormApi.Model
{
    public class UserInfo
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required(ErrorMessage = "Phone is required")]
        [Phone]
        [MaxLength(20)]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        [MaxLength(100)]
        public string Email { get; set; }
    }
}
