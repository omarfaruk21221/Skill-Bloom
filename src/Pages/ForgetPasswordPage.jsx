import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";

const ForgetPasswordPage = () => {
  const { forgetPassword } = useContext(AuthContext);
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefilledEmail);
  const [sending, setSending] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      setSending(true);
      await forgetPassword(email);

      toast.success("Password reset email sent! Redirecting to Gmail...");
    } catch (err) {
      toast.error(err?.message || "Failed to send reset email.");
      setSending(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold text-accent">
            Reset Your Password
          </h1>

          <form onSubmit={handleReset} className="space-y-4">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              className="btn btn-primary w-full"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
